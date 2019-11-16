interface ProofMethod {
    (message: string): boolean;
}

export class Proof {
    checkIP: ProofMethod;
}