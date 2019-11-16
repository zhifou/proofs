/**
 * @file Proof验证类
 * @author zhaoyadong
 */
export class Proof {
    // 检查用户名是否合法，4到16位（字母，数字，下划线，减号）
    checkUserName(value: string = ''): boolean {
        let reg = new RegExp(/^[a-zA-Z0-9_-]{4,16}$/);
        return reg.test(value);
    }
    // 检查密码是否合法，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
    checkPassword(value: string = ''): boolean {
        let reg = new RegExp(/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/);
        return reg.test(value);
    }
    // 检查IP是否合法
    checkIP(value: string = ''): boolean {
        let reg = new RegExp(/(\d+)\.(\d+)\.(\d+)\.(\d+)/g);
        return reg.test(value);
    }
    // 检查Email是否合法
    checkEmail(value: string = ''): boolean {
        let reg = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
        return reg.test(value);
    }
    // 检查Mobile是否合法
    checkMobile(value: string = ''): boolean {
        let reg = new RegExp(/^[1][3|5|7|8][0-9]{9}$/);
        return reg.test(value);
    }
    // 检查车牌号码是否合法
    checkCarNumber(value: string = ''): boolean {
        let reg = new RegExp(/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/);
        return reg.test(value);
    }
    // 检查身份证是否合法
    checkIDCard(value: string = ''): boolean {
        let reg = new RegExp(/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/);
        return reg.test(value);
    }
}