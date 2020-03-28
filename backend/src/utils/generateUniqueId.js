const crypto = require('crypto');

module.exports = function genereateUniqueId(){
    const id = crypto.randomBytes(4).toString('HEX');
    return id;
}