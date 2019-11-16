export class Proof {
    checkIP(value: string = ''): boolean {
        let reg = new RegExp(/(\d+)\.(\d+)\.(\d+)\.(\d+)/g);
        return reg.test(value);
    }
}