import React from 'react';
import { Button, Box } from '@mui/material';

const ContactForm: React.FC = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Convert FormData to JSON object
    const data = {
      ContactName: formData.get('ContactName'),
      CompanyName: formData.get('CompanyName'),
    };
    
    // Send JSON data
    fetch('https://budrcbbvtuj54eg243hlwjkhme0mwvfi.lambda-url.ca-central-1.on.aws', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.ok) {
        // Clear the form
        form.reset();
        // Show thank you message
        alert('Thank you! Your message has been sent successfully.');
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    })
    .catch(error => {
      alert('There was an error sending your message. Please try again.' );
      console.error('Error:', error);
    });
  };

  return (
    <>
      <Box 
        component="form" 
        onSubmit={handleSubmit}
        sx={{ mt: 4 }}
      >
        <Box sx={{ mb: 2 }}>
          <input
            type="text"
            name="ContactName"
            placeholder="Name"
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <input
            type="email"
            name="CompanyName"
            placeholder="Email"
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <textarea
            placeholder="Message"
            required
            rows={4}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px',
              resize: 'vertical'
            }}
          />
        </Box>
        
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Send
        </Button>
      </Box>
    </>
  );
};

export default ContactForm;