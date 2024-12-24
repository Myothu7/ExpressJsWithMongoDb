const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/connectWithDb');
    
    await mongoose.connection.on('connected', () => console.log('connected'));
    await mongoose.connection.on('open', () => console.log('open'));
    await mongoose.connection.on('disconnected', () => console.log('disconnected'));
    await mongoose.connection.on('reconnected', () => console.log('reconnected'));
    await mongoose.connection.on('disconnecting', () => console.log('disconnecting'));
    await mongoose.connection.on('close', () => console.log('close'));
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = main;

