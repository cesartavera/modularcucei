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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

export default function UploadStory({open, onClose}) {
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
  
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

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

  formData.append('email', decodedToken.email);
  formData.append('image', selectedFile);

  try{
    const response = await fetch('http://192.168.100.5:4000/user-stories/story',{
      method: 'POST',
      headers:{
        'Authorization': `Bearer ${token}`,
      },
      body:formData,
    });

    const data = await response.json();

    if (data.message === 'Story uploaded successfully'){
      alert('Story uploaded successfully');
      onClose();
      window.location.reload();
    } else {
      alert('Error on upload');
    }
  } catch(error){
    console.error('Error uploading story: ', error);
    alert('Error uploading story');
  }
};

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Upload your story</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Share your experience with everyone!
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="Title"
            name="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="Comments"
            name="comments"
            label="Comments"
            type="text"
            fullWidth
            variant="standard"
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
            <VisuallyHiddenInput type="file" name="image" onChange={handleFileChange} />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit">Upload</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}