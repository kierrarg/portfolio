import React, { useState } from 'react';
import './Contact.css'
import { SocialIcon } from 'react-social-icons';


const Contact = () => {
    //useState hook to set up form data
    /*const [formData, setFormData] = useState({
        Namee: '',
        Email: '',
        Subj: '',
        Details: '',
      });
    // triggered whenever there is a change in any of the input fields in contact form
    // e = change event
    // ...formData to create shallow copy and update the property with new value
      const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    //when user submits contact form
      const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data); // Log the server response if needed
            // Reset the form fields after successful submission
            setFormData({
              Namee: '',
              Email: '',
              Subj: '',
              Details: '',
            });
          })
          .catch((error) => {
            console.error('Error submitting form:', error.message);
            // Handle error if needed
          });
      };
*/
    return (
        <div className='contact-page'>
            <div className='form'>
                <h1>Contact Me</h1>
                <div className='form-group'>
                  <h3>For commission requests</h3>
                    <form /*onSubmit={handleSubmit}*/>
                        <label>Your Name</label>
                        <input 
                        type='text' 
                        name="Namee" placeholder="Name"
                        /*value={formData.Namee} onChange={handleInputChange}*/></input>
                        <label>Email</label>
                        <input 
                        type='text' 
                        name="Email" placeholder="Email"
                        /*value={formData.Email} onChange={handleInputChange}*/></input>
                        <label>Subject</label>
                        <input 
                        type='text' 
                        name="Subj" placeholder="Subject" 
                        /*value={formData.Subj}
                        onChange={handleInputChange}*/></input>
                        <label>Details</label>
                        <textarea rows='10' name="Details" placeholder='Type a short message' 
                        /*value={formData.Details}
                        onChange={handleInputChange}*//>
                        <button className='btn' disabled>Submit</button>
                        </form>
                        <footer>
                          <h3>Socials</h3>
                          <div className='social-icons'>
                          <SocialIcon url="https://www.instagram.com/graphiterae/" />
                          <SocialIcon url="https://www.linkedin.com/in/kierra-gagnon-950977191" />
                          <SocialIcon url="https://www.github.com/kierrarg" />
                          </div>
                        </footer>
                </div>
            </div>
        </div>
    );
}

export default Contact;