const config = require("./config/setting");

const mssql = require("mssql");
class DBConnection {
  async getConnection() {
    try {
      return await mssql.connect({
        user: config.dbConfig.user,
        password: config.dbConfig.password,
        server: config.dbConfig.server,
        database: config.dbConfig.database,
        port: config.dbConfig.port,
        connectionTimeout: config.dbConfig.connectionTimeout,
        pool: {
          max: 10,
          min: 0,
          idleTimeoutMillis: 30000,
        },
        options: {
          encrypt: false,
          trustServerCertificate: false,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new DBConnection();
