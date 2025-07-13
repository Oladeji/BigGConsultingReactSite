import React from 'react';
import { Button, Box } from '@mui/material';

const ContactForm: React.FC = () => {
  return (
    <>
      <Box 
        component="form" 
        action="https://localhost:7251/rma"
        method="POST"
        target="hidden-iframe"
          encType="application/x-www-form-urlencoded"
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
            name="message"
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
      
      {/* Hidden iframe to capture form submission */}
      <iframe
        name="hidden-iframe"
        style={{ display: 'none' }}
        title="Hidden iframe for form submission"
      />
    </>
  );
};

export default ContactForm;