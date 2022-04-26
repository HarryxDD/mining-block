const SHA256 = require('crypto-js/sha256')
const bignum = require('bignumber.js')

class Block {
    constructor() {
        // this.hash = '7B55EE99E84B8AA1D03D58AA068D4E02A4C78DD5342A35065F9B6D9C22ADF1A0';
        // this.hash = '4dec4facc0a2d9baa77a80262d18d98cc02cbc266c9d36d75e5754b8e406f673';
        // this.nonce = 342342
        this.hash = '000000000000000000000b458f618e6444ff7947fb1b917c032d732cefa1c233'
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
        let nonce = 0

        while (bignum("0x"+SHA256(`${nonce}`).toString()).toString() > bignum("0x"+this.hash.toString())){

            nonce++
            console.log("---------")
            console.log("target: " + bignum("0x"+this.hash).toString())
            console.log("sha(nonce): " + bignum("0x"+SHA256(`${nonce}`).toString()).toString())
            console.log("nonce: " + nonce)

        }

        // console.log("---------")
        // console.log(bignum("0x"+this.hash).toString())
        // console.log(bignum("0x"+SHA256(nonce).toString()).toString())
        // console.log(nonce)
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