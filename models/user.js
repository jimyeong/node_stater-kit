const Sequelize = require("sequelize");


module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            email:{
                type:Sequelize.STRING(50),
                allowNull: false,
                unique: true
            },
            password:{
                type:Sequelize.STRING(22),
                allowNull: false,
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
    static associate(db){
        db.User.hasOne(db.Mentor, {foreignKey: "userId"});
    }
}