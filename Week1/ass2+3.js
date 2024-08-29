// find nonce such that ipt starts with 100xdevs and otp starts with 00000

const crypto = require("crypto")
const prefix = "100xdevs"
const hashStartsWith = "00000"

function getHash(input){
    return crypto.createHash('sha256').update(input).digest("hex")
}

for(let i = 0; ;i++){
    const hash = getHash(prefix+i)
    if(hash.startsWith(hashStartsWith)){
        console.log(prefix+i + "," + hash)
        break
    }
}