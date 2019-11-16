/**
 * @file 接口方法声明
 * @author zhaoyadong
 */
interface ProofMethod {
    (message: string): boolean;
}

export class Proof {
    checkIP: ProofMethod;
}