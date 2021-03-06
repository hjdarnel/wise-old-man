module.exports = (sequelize, DataTypes) => {
  // Define the participation schema
  const participationSchema = {
    playerId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    competitionId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  };

  // Define other table options
  const options = {
    indexes: [
      {
        unique: true,
        fields: ['playerId', 'competitionId']
      }
    ]
  };

  // Create the model
  const Participation = sequelize.define('participations', participationSchema, options);

  Participation.associate = models => {
    Participation.belongsTo(models.Player, {
      foreignKey: 'playerId',
      onDelete: 'CASCADE'
    });
    Participation.belongsTo(models.Competition, {
      foreignKey: 'competitionId',
      onDelete: 'CASCADE'
    });
  };

  return Participation;
};
