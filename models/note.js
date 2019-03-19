const Sequelize = require('sequelize');
var path = require('path');

// Option 1: Passing parameters separately
const sequelize = new Sequelize(undefined, undefined, undefined, {
    host: 'localhost',
    dialect: 'sqlite',

      // SQLite only
    storage: path.join(__dirname, '../database/database.sqlite')
});

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });

// 创建一个表格
const Note = sequelize.define('note', {
    text: {
        type: Sequelize.STRING
    }
});

// 同步表格
// Note: using `force: true` will drop the table if it already exists
Note.sync()

// Note.create({
//     text: 'hello world!'
// })

// Note.findAll({raw: true}).then(notes => {
//     console.log("All notes:", notes);
// });

module.exports.Note = Note;