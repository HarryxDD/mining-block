const SHA256 = require('crypto-js/sha256')
const bignum = require('bignumber.js')

class Block {
    constructor() {
        // this.hash = '7B55EE99E84B8AA1D03D58AA068D4E02A4C78DD5342A35065F9B6D9C22ADF1A0';
        this.hash = '9b47a5ce13301445dcb5d081f12787e51947a2a67061b5d8c5595411d04ba7a7';
        this.nonce = 342342
    }

    // mineBlock(difficulty) {
    //     while(this.hash.substring(0, 4) !== '0000' ){
    //         this.nonce--
    //         this.hash = SHA256(this.hash + this.nonce).toString()
    //         // console.log(this.nonce)
    //     }

    //     console.log("Block mined: " + this.hash)
    // }

    compareHash() {
        let nonce = 432341

        while ((bignum(SHA256(nonce).toString()).toString()) !== (bignum(this.hash).toString())){
            nonce+=1
            console.log("---------")
            console.log(bignum("0x"+this.hash).toFixed())
            console.log(bignum("0x"+SHA256(nonce).toString()).toFixed())
            console.log(this.nonce)
        }

        console.log(nonce)
        

        // let x = new bignum('0x9b47a5ce13301445dcb5d081f12787e51947a2a67061b5d8c5595411d04ba7a7')
        // console.log(x)
    }

}



class Blockchain {
    constructor() {
        this.chain = [];
    }

    addBlock(newBlock) {
        newBlock.compareHash();
        this.chain.push(newBlock);
    }
}

function toNumber(string) {
    // var number = 0.0;
    // for(let i=0;i<hash.length;i++) {
    //     number += parseInt(hash.charAt(i), 16) / 16;
    // }
    // number /= hash.length;
    // console.log(number)

    var hashVal = 0;
    if (string.length == 0) return hashVal;
    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hashVal = ((hashVal << 5) - hashVal) + char;
        hashVal = hashVal & hashVal;
    }
    return hashVal;
}

let alyx = new Blockchain()
alyx.addBlock(new Block)



// console.log(JSON.stringify(alyx, null, 4))