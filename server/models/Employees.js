module.exports = (Sequelize, DataTypes) => {
    const Employees = Sequelize.define(
        "Employees",
        {
            email_id: {
                type: DataTypes.STRING,
                //primaryKey: true,
                //autoIncrement: true,
            },
            name:{
              type:DataTypes.STRING,
            },
            tnl_id: {
              type: DataTypes.INTEGER,
              primaryKey: true,
            },
            role:{
              type: DataTypes.STRING
            },
            department:{
              type: DataTypes.STRING
            },
            reporting_manager_email:{
              type: DataTypes.STRING
            },
            created_at:{
                type: 'TIMESTAMP',
                //defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            },
            created_by:{
                type:DataTypes.STRING
            }
        },
        {
            timestamps: false,
            modelName: "Employees",
            tableName: "employees",
        },
    );

    return Employees;
};