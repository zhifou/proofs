# Proof验证工具
## 验证用户名
```
new Proof().checkUserName('abcstatic123');
```
## 验证密码
```
new Proof().checkPassword('Zhedddd.0!');
```
## 验证手机号
```
new Proof().checkMobile('18701239733');
```
## 验证电子邮箱
```
new Proof().checkEmail('atding@163.com');
```
## 验证IPV4
```
new Proof().checkIP('222.123.444.333');
```
## 验证车牌号
```
new Proof().checkCarNumber('京NFE888');
```
## 验证身份证号
```
new Proof().checkIDCard('330781198509078556');
```
## 验证QQ号码是否合法，非0开头的5至11位数字
```
new Proof().checkQQ('3307811981');
```
## 验证微信号是否合法，6至20位，以字母开头，字母，数字，减号，下划线
```
new Proof().checkWX('wx_3307811981');
```
## 验证是否包含中文字符
```
new Proof().checkCN('赵1981');
```
## 验证邮政编码是否合法
```
new Proof().checkPostcode('121981');
```
