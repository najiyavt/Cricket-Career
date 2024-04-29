const sequelize= require('../util/databse');
const DataTypes=require('sequelize')

const Profile = sequelize.define('Profile', {
    
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    dob:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    imgUrl:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    place:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    career:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    score:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});
module.exports=Profile;