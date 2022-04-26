const SHA256 = require('crypto-js/sha256')

class Block {
    constructor() {
        this.hash = '43bf33895e5353722252f9ff31392ae605cb8f98e3cf4e61294f4440f151f008';
        this.nonce = 0
    }

    mineBlock(difficulty) {
        while(this.hash.substring(0, 1) !== '0' ){
            this.nonce++
            this.hash = SHA256(this.hash + this.nonce).toString()
            console.log(this.nonce)
        }

        console.log("Block mined: " + this.hash)
    }
}

class Blockchain {
    constructor() {
        this.chain = [];
    }

    addBlock(newBlock) {
        newBlock.mineBlock();
        this.chain.push(newBlock);
    }
}

let alyx = new Blockchain()
alyx.addBlock(new Block)

console.log(JSON.stringify(alyx, null, 4))