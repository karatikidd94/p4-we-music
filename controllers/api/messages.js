const Message = require('../../models/message');

module.exports = {
    index,
    create,
    delete: deleteMessage,
}

async function index(req, res) {
    const messages = await Message.find({});
    console.log("Index from Controller: ", messages);
    res.json(messages);
}

async function create(req, res) {
    const message = await Message.create(req.body);
    console.log("Create from Controller: ", message);
    res.json(message);
}

async function deleteMessage(req, res) {
    console.log("Controller Delete Message: ", req.params.id);
    const message = await Message.findOneAndDelete(req.params.id);
    res.json(message);
}