const Vue = require('vue');
const { createRenderer } = require('vue-server-renderer');
const serverRender = createRenderer();
const express = require('express');

const server = express();

const app = new Vue({
  template: '<div>{{text}}</div>',
  data() {
    return {
      text: '111'
    };
  }
});

server.get('/', (req, res) => {
  serverRender
    .renderToString(app)
    .then(html => {
      res.send(html);
    })
    .catch(err => console.log(err));
});

server.listen(8088);
