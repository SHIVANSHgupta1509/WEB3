// give ipt which starts with 00000

const crypto = require("crypto")
const otpStartsWith = "00000"

for(let ipt = 0; ; ipt++){
  const hash = giveOtp(ipt.toString())
  if(hash.startsWith(otpStartsWith)){
    console.log(ipt + "," + hash)
    break
  }
}

function giveOtp(input){
    return crypto.createHash('sha256').update(input).digest('hex')
}