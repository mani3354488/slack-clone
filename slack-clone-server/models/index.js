const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');

// const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/slack');

const modelDefiners = [
    require('./users'),
	require('./channel'),
    require('./member'),
    require('./message'),
    require('./team'),
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}
applyExtraSetup(sequelize);
module.exports = sequelize;