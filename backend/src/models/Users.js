const db = require('mongoose')

const skema = db.Schema({
    username: { type: String },
    password: { type: String },
    nama: { type: String },
    email: { type: String },
    sekolah: { type: String },
    pendidikan: { type: String }

}, { collection: 'users' })

module.exports = db.model('users', skema);
