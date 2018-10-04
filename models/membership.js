/**
 * Membership Model
 */

// Export membership model
module.exports = (sequelize, DataTypes) => {
    const Membership = sequelize.define("Membership", {
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        isMember: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
    Membership.associate = (models) => {
        Membership.belongsTo(models.User, {
            foreignKey: {
                name: "userId",
                allowNull: false
            }
        });
        Membership.belongsToMany(models.Group, {
            foreignKey: {
                name: "groupId",
                allowNull: false
            }
        });
    };
};
