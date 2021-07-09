const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Nodejs_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connected');
    }
    catch (error) {
        console.log('connect failed');
    }
}

module.exports = { connect };