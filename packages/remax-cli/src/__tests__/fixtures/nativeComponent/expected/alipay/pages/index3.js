'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../index-chunk.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var alipay = require('../alipay-chunk.js');
var index = require('../index-chunk3.js');

var B = index$1.createNativeComponent('b-0');


var _page = function _page() {
  return React.createElement(alipay.View, null, React.createElement(index.G, null), React.createElement(B, null));
};

var index3 = Page(index$1.createPageConfig(_page));

exports.default = index3;
