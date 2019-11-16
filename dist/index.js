"use strict";
exports.__esModule = true;
var Proof = /** @class */ (function () {
    function Proof() {
    }
    Proof.prototype.checkIP = function (value) {
        if (value === void 0) { value = ''; }
        var reg = new RegExp(/(\d+)\.(\d+)\.(\d+)\.(\d+)/g);
        return reg.test(value);
    };
    return Proof;
}());
exports.Proof = Proof;
