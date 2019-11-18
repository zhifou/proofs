/**
 * @file 接口方法声明
 * @author zhaoyadong
 */
interface ProofMethod {
    (message: string): boolean;
}

export default class Proof {
    checkUserName: ProofMethod;
    checkPassword: ProofMethod;
    checkIP: ProofMethod;
    checkEmail: ProofMethod;
    checkMobile: ProofMethod;
    checkCarNumber: ProofMethod;
    checkIDCard: ProofMethod;
}