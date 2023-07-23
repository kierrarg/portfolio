/*const express = require('express'),
dbOperation = require('./dbfiles/dbOperation'),
Contact = require('./dbfiles/contact')
cors = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();


// added this
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Endpoint to handle the incoming contact form data
app.post('/api/contact', async (req, res) => {
    try {
      const { Namee, Email, Subj, Details } = req.body;
      const contact = { Namee, Email, Subj, Details };
      
      await dbOperation.addContact(contact);
  
      res.send({ message: 'Contact added successfully' });
    } catch (error) {
      console.error('Error adding contact:', error.message);
      res.status(500).send({ error: 'An error occurred while adding the contact' });
    }
  });

app.post('/quit', function(req, res) {
    console.log('called');
    res.send({result: 'byeeeeee'})
})

//let Yo = new Contact('Kierra1', 'kierra@gmail.com', 'yo', 'yooooo');


//dbOperation.getContact().then(res => {
    //console.log(res.recordset);
//})

//dbOperation.addContact(Yo);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
*/