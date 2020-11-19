const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('user', {
		username: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: true,
			// validate: {
			// 	// We require usernames to have length of at least 3, and
			// 	// only use letters, numbers and underscores.
			// 	is: /^\w{3,}$/
			// }
        },
        email: {
            allowNull: false,
			type: DataTypes.STRING,
			unique: true,
        },
        password: {
            allowNull: false,
			type: DataTypes.STRING,
        }
	});
};

