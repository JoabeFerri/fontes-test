import crypto from 'crypto';

export function hashpasswordword(password: string){

    const hashpassword = crypto.randomBytes(16).toString('hex')

    const hash = crypto.pbkdf2Sync(password, hashpassword, 1000, 64, 'sha512').toString('hex')

    return { hash, hashpassword}
}

export function verifyPasswrod({candidatePassword, hashpassword, hash}:
    {
    candidatePassword: string;
    hashpassword: string;
    hash: string;
    }) {
        const candidateHash = crypto.pbkdf2Sync(candidatePassword, hashpassword, 1000, 64, 'sha512').toString('hex')

        return candidateHash === hash;
}