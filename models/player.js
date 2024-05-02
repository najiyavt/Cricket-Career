const sequelize= require('../util/databse');
const Sequelize=require('sequelize')

const Profile = sequelize.define('Profile', {
    
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    dob:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    imgUrl:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    place:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    career:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
    score:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});
module.exports=Profile;