const contentDisposition = require('content-disposition');
const getType = require('cache-content-type');
const onFinish = require('on-finished');
const escape = require('escape-html');
const typeis = require('type-is').is;
const statuses = require('statuses');
const destroy = require('destroy');
const assert = require('assert');
const extname = require('path').extname;
const vary = require('vary');
const only = require('only');
const util = require('util');
const encodeUrl = require('encodeurl');
const Stream = require('stream');

module.exports = {
  get socket() {
    return this.res.socket;
  },

  get header() {
    const { res } = this;
    return typeof res.getHeaders === 'function' ? res.getHeaders() : res._headers || {}; // Node < 7.7
  },

  get headers() {
    return this.header;
  },

  get status() {
    return this.res.statusCode;
  },

  set status(code) {
    if (this.headerSent) return;

    assert(Number.isInteger(code), 'status code must be a number');
    assert(code >= 100 && code <= 999, `invalid status code: ${code}`);
    this._explicitStatus = true;
    this.res.statusCode = code;
    if (this.req.httpVersionMajor < 2) this.res.statusMessage = statuses[code];
    if (this.body && statuses.empty[code]) this.body = null;
  },

  get message() {
    return this.res.statusMessage || statuses[this.status];
  },

  set message(msg) {
    this.res.statusMessage = msg;
  },

  get body() {
    return this._body;
  },

  set body(val) {
    const original = this._body;
    this._body = val;

    // no content
    if (null == val) {
      if (!statuses.empty[this.status]) this.status = 204;
      if (val === null) this._explicitNullBody = true;
      this.remove('Content-Type');
      this.remove('Content-Length');
      this.remove('Transfer-Encoding');
      return;
    }

    // set the status
    if (!this._explicitStatus) this.status = 200;

    // set the content-type only if not yet set
    const setType = !this.has('Content-Type');

    // string
    if ('string' === typeof val) {
      if (setType) this.type = /^\s*</.test(val) ? 'html' : 'text';
      this.length = Buffer.byteLength(val);
      return;
    }

    // buffer
    if (Buffer.isBuffer(val)) {
      if (setType) this.type = 'bin';
      this.length = val.length;
      return;
    }

    // stream
    if (val instanceof Stream) {
      onFinish(this.res, destroy.bind(null, val));
      if (original != val) {
        val.once('error', err => this.ctx.onerror(err));
        // overwriting
        if (null != original) this.remove('Content-Length');
      }

      if (setType) this.type = 'bin';
      return;
    }

    // json
    this.remove('Content-Length');
    this.type = 'json';
  },

  set length(n) {
    this.set('Content-Length', n);
  },

  get length() {
    if (this.has('Content-Length')) {
      return parseInt(this.get('Content-Length'), 10) || 0;
    }

    const { body } = this;
    if (!body || body instanceof Stream) return undefined;
    if ('string' === typeof body) return Buffer.byteLength(body);
    if (Buffer.isBuffer(body)) return body.length;
    return Buffer.byteLength(JSON.stringify(body));
  },

  get headerSent() {
    return this.res.headersSent;
  },

  vary(field) {
    if (this.headerSent) return;

    vary(this.res, field);
  },

  redirect(url, alt) {
    // location
    if ('back' === url) url = this.ctx.get('Referrer') || alt || '/';
    this.set('Location', encodeUrl(url));

    // status
    if (!statuses.redirect[this.status]) this.status = 302;

    // html
    if (this.ctx.accepts('html')) {
      url = escape(url);
      this.type = 'text/html; charset=utf-8';
      this.body = `Redirecting to <a href="${url}">${url}</a>.`;
      return;
    }

    // text
    this.type = 'text/plain; charset=utf-8';
    this.body = `Redirecting to ${url}.`;
  },

  attachment(filename, options) {
    if (filename) this.type = extname(filename);
    this.set('Content-Disposition', contentDisposition(filename, options));
  },

  set type(type) {
    type = getType(type);
    if (type) {
      this.set('Content-Type', type);
    } else {
      this.remove('Content-Type');
    }
  },

  set lastModified(val) {
    if ('string' === typeof val) val = new Date(val);
    this.set('Last-Modified', val.toUTCString());
  },

  get lastModified() {
    const date = this.get('last-modified');
    if (date) return new Date(date);
  },

  set etag(val) {
    if (!/^(W\/)?"/.test(val)) val = `"${val}"`;
    this.set('ETag', val);
  },

  get etag() {
    return this.get('ETag');
  },

  get type() {
    const type = this.get('Content-Type');
    if (!type) return '';
    return type.split(';', 1)[0];
  },

  is(type, ...types) {
    return typeis(this.type, type, ...types);
  },

  get(field) {
    return this.header[field.toLowerCase()] || '';
  },

  has(field) {
    return typeof this.res.hasHeader === 'function'
      ? this.res.hasHeader(field)
      : // Node < 7.7
        field.toLowerCase() in this.headers;
  },

  set(field, val) {
    if (this.headerSent) return;

    if (2 === arguments.length) {
      if (Array.isArray(val)) val = val.map(v => (typeof v === 'string' ? v : String(v)));
      else if (typeof val !== 'string') val = String(val);
      this.res.setHeader(field, val);
    } else {
      for (const key in field) {
        this.set(key, field[key]);
      }
    }
  },

  append(field, val) {
    const prev = this.get(field);

    if (prev) {
      val = Array.isArray(prev) ? prev.concat(val) : [prev].concat(val);
    }

    return this.set(field, val);
  },

  remove(field) {
    if (this.headerSent) return;

    this.res.removeHeader(field);
  },

  get writable() {
    if (this.res.writableEnded || this.res.finished) return false;

    const socket = this.res.socket;

    if (!socket) return true;
    return socket.writable;
  },

  inspect() {
    if (!this.res) return;
    const o = this.toJSON();
    o.body = this.body;
    return o;
  },

  toJSON() {
    return only(this, ['status', 'message', 'header']);
  },

  flushHeaders() {
    this.res.flushHeaders();
  }
};

/* istanbul ignore else */
if (util.inspect.custom) {
  module.exports[util.inspect.custom] = module.exports.inspect;
}
