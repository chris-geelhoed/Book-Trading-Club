var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var Schema = mongoose.Schema;

var TradeRequestSchema = new Schema({
    bookInstance: {
        type: Schema.Types.ObjectId,
        ref: 'BookInstance',
        required: true
    },
    requester: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

TradeRequestSchema.plugin(deepPopulate);
module.exports = mongoose.model('TradeRequest', TradeRequestSchema);