import * as React from 'react';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
//Materials
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


export default function FormUserDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const token = localStorage.getItem('token');
    let decodedToken = null;

    if(token){
        try{
            decodedToken = jwtDecode(token);
        } catch(error){
            console.error('Error decoding token: ', error);
        }
    }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Agregar email y nombre al FormData
    formData.append('email', decodedToken.email);
    formData.append('nombre', formData.get('name'));
    formData.append('image', selectedFile);

    try{
      const response = await fetch('http://localhost:4000/user-profile/update-profile', {
        method:'PUT',
        headers:{
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();
      if (data.message === 'Profile updated successfully') {
        localStorage.setItem('token', data.token);
        alert('Profile updated successfully');
        decodedToken = jwtDecode(data.token);
        window.location.reload();
        handleClose();
      } else {
        alert('Error al actualizar perfil');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error al actualizar perfil');
    }
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Update
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Update your information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            These details could be publicly available.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="User Name"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={decodedToken?.nombre}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            defaultValue={decodedToken?.email}
            disabled
          />
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{marginTop:'10px'}}
            >
            Upload Image
            <VisuallyHiddenInput type="file" name="image" onChange={handleFileChange}/>
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Update</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}