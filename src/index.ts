/**
 * @file Proof验证类
 * @author zhaoyadong
 */
export default class Proof {
    // 验证用户名是否合法，4到16位（字母，数字，下划线，减号）
    checkUserName(value: string = ''): boolean {
        let reg = new RegExp(/^[a-zA-Z0-9_-]{4,16}$/);
        return reg.test(value);
    }
    // 验证密码是否合法，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
    checkPassword(value: string = ''): boolean {
        let reg = new RegExp(/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/);
        return reg.test(value);
    }
    // 验证IP是否合法
    checkIP(value: string = ''): boolean {
        let reg = new RegExp(/(\d+)\.(\d+)\.(\d+)\.(\d+)/g);
        return reg.test(value);
    }
    // 验证IPv4是否合法
    checkIPv4(value: string = ''): boolean {
        let reg = new RegExp(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/);
        return reg.test(value);
    }
    // 验证Email是否合法
    checkEmail(value: string = ''): boolean {
        let reg = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
        return reg.test(value);
    }
    // 验证Mobile是否合法
    checkMobile(value: string = ''): boolean {
        let reg = new RegExp(/^[1][3|5|7|8][0-9]{9}$/);
        return reg.test(value);
    }
    // 验证车牌号码是否合法
    checkCarNumber(value: string = ''): boolean {
        let reg = new RegExp(/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/);
        return reg.test(value);
    }
    // 验证身份证是否合法
    checkIDCard(value: string = ''): boolean {
        let city = {11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};

        if(!value || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(value)){
            return false;
        }
        else if(!city[value.substr(0,2)]){
            return false;
        }
        else {
            // 18位身份证需要验证最后一位校验位
            if(value.length === 18){
                let code: Array<string> = value.split('');
                //∑(ai×Wi)(mod 11)
                //加权因子
                let factor: Array<number> = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
                //校验位
                let parity: Array<number|string> = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
                let sum: number = 0;
                let ai: any = 0;
                let wi: number = 0;
                for (let i = 0; i < 17; i++) {
                    ai = code[i];
                    wi = factor[i];
                    sum += ai * wi;
                }
                let last = parity[sum % 11];
                if(last+'' !== code[17]) {
                    return false;
                }
            }
        }
        return true;
    }
    // 验证QQ号码是否合法，非0开头的5至11位数字
    checkQQ(value: string = ''): boolean {
        let reg = new RegExp(/^[1-9][0-9]{4,10}$/);
        return reg.test(value);
    }
    // 验证微信号是否合法，6至20位，以字母开头，字母，数字，减号，下划线
    checkWX(value: string = ''): boolean {
        let reg = new RegExp(/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/);
        return reg.test(value);
    }
    // 验证是否包含中文字符
    checkCN(value: string = ''): boolean {
        let reg = new RegExp(/[\u4E00-\u9FA5]/);
        return reg.test(value);
    }
    // 验证邮政编码是否合法
    checkPostcode(value: string = ''): boolean {
        let reg = new RegExp(/^[1-9]\d{5}$/);
        return reg.test(value);
    }
}