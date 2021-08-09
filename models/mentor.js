const Sequelize = require("sequelize");
module.exports = class Mentor extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            addr:{
                type: Sequelize.STRING(150),
            },
            created_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            }
        },{
            sequelize,
            paranoid: false,
            timestamps: false,
            tableName: "users",
            modelName: "User",
            charset: "utf8",
            collate: "utf8_general_ci"
        })
    }
}