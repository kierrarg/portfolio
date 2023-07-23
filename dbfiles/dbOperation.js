/*const config = require('./dbConfig'),
sql = require('mssql');

const getContact = async() => {
    try {
        let pool = await sql.connect(config);
        let contact = pool.request().query("SELECT * from Contact")
        console.log(contact);
        return contact;
    }
    catch(error) {
        console.log('Error executing query:', error.message);
    }
}

const addContact = async(Contact) => {
    try {
        let pool = await sql.connect(config);
        let contact = pool.request().query(`INSERT INTO Contact VALUES
        ('${Contact.Namee}', '${Contact.Email}',  '${Contact.Subj}', '${Contact.Details}' )`)
        console.log(contact);
        return contact;
    }
    catch(error) {
        console.log('Error executing query:', error.message);
    }
}

module.exports = {
    addContact,
    getContact
}
*/