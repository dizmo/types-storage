"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var chai_1 = require("chai");

require("mocha");

describe("Storage", function () {
  it("should not exist", function () {
    chai_1.expect(typeof storage === "undefined" ? "undefined" : _typeof(storage)).to.eq("undefined");
  });
  it("should not be referenceable", function () {
    chai_1.expect(function () {
      return storage;
    }).to["throw"](ReferenceError);
  });
});
//# sourceMappingURL=test.js.map