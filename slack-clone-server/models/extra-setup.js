function applyExtraSetup(sequelize) {
	const { user, team, message, channel } = sequelize.models;
    user.belongsToMany(team, {
        through: 'member',
        foreignKey: 'userId'
    });
    team.belongsToMany(user, {
        through: 'member',
        foreignKey: 'teamId',
    });
    team.belongsToMany(user, {
        foreignKey: 'owner',
    });
    message.belongsTo(user, {
        foreignKey: 'userId'
    });
    message.belongsTo(channel, {
        foreignKey: 'channelId'
    });
	channel.belongsTo(team, {
        foreignKey: 'teamId',
    });
}

module.exports = { applyExtraSetup };