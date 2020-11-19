const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('message', {
		text: {
			allowNull: false,
			type: DataTypes.STRING,
			// validate: {
			// 	// We require usernames to have length of at least 3, and
			// 	// only use letters, numbers and underscores.
			// 	is: /^\w{3,}$/
			// }
        },
	});
};

