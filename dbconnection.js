const mssql = require("mssql");
class DBConnection {
  async getConnection() {
    try {
      return await mssql.connect({
        user: "demo",
        password: "demo",
        server: "127.0.0.1",
        database: "Demo",
        port: 1433,
        connectionTimeout: 30000,
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
