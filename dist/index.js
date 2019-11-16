"use strict";
exports.__esModule = true;
var Proof = /** @class */ (function () {
    function Proof() {
    }
    // 检查用户名是否合法，4到16位（字母，数字，下划线，减号）
    Proof.prototype.checkUserName = function (value) {
        if (value === void 0) { value = ''; }
        var reg = new RegExp(/^[a-zA-Z0-9_-]{4,16}$/);
        return reg.test(value);
    };
    // 检查密码是否合法，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
    Proof.prototype.checkPassword = function (value) {
        if (value === void 0) { value = ''; }
        var reg = new RegExp(/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/);
        return reg.test(value);
    };
    // 检查IP是否合法
    Proof.prototype.checkIP = function (value) {
        if (value === void 0) { value = ''; }
        var reg = new RegExp(/(\d+)\.(\d+)\.(\d+)\.(\d+)/g);
        return reg.test(value);
    };
    // 检查Email是否合法
    Proof.prototype.checkEmail = function (value) {
        if (value === void 0) { value = ''; }
        var reg = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
        return reg.test(value);
    };
    // 检查Mobile是否合法
    Proof.prototype.checkMobile = function (value) {
        if (value === void 0) { value = ''; }
        var reg = new RegExp(/^[1][3|5|7|8][0-9]{9}$/);
        return reg.test(value);
    };
    // 检查车牌号码是否合法
    Proof.prototype.checkCarNumber = function (value) {
        if (value === void 0) { value = ''; }
        var reg = new RegExp(/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/);
        return reg.test(value);
    };
    // 检查身份证是否合法
    Proof.prototype.checkIDCard = function (value) {
        if (value === void 0) { value = ''; }
        var reg = new RegExp(/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/);
        return reg.test(value);
    };
    return Proof;
}());
exports.Proof = Proof;
