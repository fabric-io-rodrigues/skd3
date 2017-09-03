// set up main sk object
var sk = {};
sk.alertVersion = function () { alert(this.version);}

// Node/CommonJS - require D3
if (typeof(module) !== 'undefined' && typeof(exports) !== 'undefined' && typeof(d3) == 'undefined') {
    d3 = require('d3');
}

// Node/CommonJS exports
if (typeof(module) !== 'undefined' && typeof(exports) !== 'undefined') {
  module.exports = sk;
}

if (typeof(window) !== 'undefined') {
  window.sk = sk;
}
