const bcrypt = require('bcrypt');

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => { //genSalt() es una función de bcrypt que genera un "salt" aleatorio para usar en la generación del hash.
            if(err){ 
                reject(err) //error en la generación del salt, se rechaza la promesa con el error.
            }
            bcrypt.hash(password, salt, (err, hash) => { //bcrypt.hash() para generar el hash de la contraseña
                if(err) {
                    reject(err) //error en la generación del hash, se rechaza la promesa con el error.
                }
                resolve(hash) //se resuelve la promesa con el hash generado.
            })
        })
    })
}

const comparePassword = (password, hashed) => {
    return bcrypt.compare(password,hashed)
}

module.exports = {
    hashPassword,
    comparePassword
}