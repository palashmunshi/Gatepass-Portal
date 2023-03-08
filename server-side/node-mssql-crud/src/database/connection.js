import sql from 'mssql/msnodesqlv8';
import config from '../config'

const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase,
    driver: "msnodesqlv8",
    options: {
        port: 1400, // default port
        encrypt: false, // for azure
        trustServerCertificate: true,
    },
};

export const getConnection = async () => {
    try {
    const pool = await sql.connect(dbSettings);
    return pool;
    } catch (error) {
      console.error(error);
    }
};

export { sql };