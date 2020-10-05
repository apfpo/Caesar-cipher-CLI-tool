const stream = require('stream');
const encode = require('./encode')


module.exports = class EncodeTransformer extends stream.Transform{
	constructor(func, shift) {
	    super();
	    this.func = encode;
	    this.shift = shift;
  	}
    _transform(data, encoding, callback){
        this.push(
            encode(data.toString(), this.shift)
            );
        callback()
    }
}