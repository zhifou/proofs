declare namespace proofjs {
    interface ProofMethod {
        (message: string): boolean;
    }

    interface Proof {
        checkIP: ProofMethod;
    }
}

export default proofjs;