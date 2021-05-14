const { Model, DataTypes } = require('sequelize')
const sequelize = require('./database')

class Blogs extends Model {}

Blogs.init({
    title: {
        type: DataTypes.STRING
    },
    author: {
        type: DataTypes.STRING
    },
    body: {
        type: DataTypes.STRING
    },
    headline: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'blogs'
})

module.exports = Blogs