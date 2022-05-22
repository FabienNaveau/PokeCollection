const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    define: {
        timestamps: true,
        underscored: true,
    },
    logging: true
})

module.exports = sequelize;