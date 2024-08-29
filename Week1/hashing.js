const crypto = require("crypto")

const ipt = "WEB3"

const hash = crypto.createHash('sha256').update(ipt).digest('hex')
console.log(hash)