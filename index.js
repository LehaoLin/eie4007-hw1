var {encryptByDES, decryptByDES, string2Hex} = require('./des')

console.log()
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
readline.question(`请输入8个要加密的字符:\n`, message1 => {
    console.log()
    console.log('输入明文的十六进制为:')
    console.log(string2Hex(message1))
    readline.question(`请输入密钥(8个字符)\n`, key1 => {
        console.log()
        var desMessage = encryptByDES(message1, key1);
        console.log('加密后十六进制密文是:')
        console.log(desMessage)
        console.log()
        readline.question(`请输入解密密码\n`, key2 => {
            var message2 = decryptByDES(desMessage, key2)
            console.log('明文为:')
            console.log(message2)
            readline.close()
        })
    })
})