const input = document.createElement('input');
const div = document.createElement('div');
document.body.appendChild(input);
document.body.appendChild(div);

function renderTitle() {
  const title = require('./title');
  div.innerHTML = title;
}

if (module.hot) {
  module.hot.accept(['./title.js', renderTitle]);
}

renderTitle();
