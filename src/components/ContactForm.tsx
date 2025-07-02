import React from 'react';
import { useForm,  } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';
import type { SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    alert("Message submitted!");
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 4 }}>
      <TextField
        fullWidth
        label="Name"
        {...register('name', { required: 'Name is required' })}
        error={!!errors.name}
        helperText={errors.name?.message}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        {...register('email', { required: 'Email is required' })}
        error={!!errors.email}
        helperText={errors.email?.message}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Message"
        {...register('message', { required: 'Message is required' })}
        error={!!errors.message}
        helperText={errors.message?.message}
        margin="normal"
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Send
      </Button>
    </Box>
  );
};

export default ContactForm;