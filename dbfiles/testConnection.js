/*const sql = require('mssql');

const config = {
    user: 'ArtPortfolio',
    password: 'kierrarg',
    server: 'DESKTOP-DC3RG3A',
    database: 'Contact',
    options: {
        trustServerCertificate: true,
        enableArithAbort: true,
    },
    port: 1433,
};

async function testConnection() {
    try {
        await sql.connect(config);
        console.log('Connection successful!');
        await sql.close();
    } catch (error) {
        console.log('Connection failed:', error.message);
    }
}

testConnection();*/