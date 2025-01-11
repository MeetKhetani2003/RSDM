import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Input,
} from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const PhotosTab = () => {
  const [photos, setPhotos] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [newPhoto, setNewPhoto] = useState({ img: '', type: '' });
  const [currentPhoto, setCurrentPhoto] = useState(null);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/photos');
      setPhotos(response.data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const handleAddPhoto = async () => {
    try {
      const formData = new FormData();
      formData.append('img', newPhoto.img);
      formData.append('type', newPhoto.type);

      await axios.post('http://localhost:3000/api/v1/photos/create', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setNewPhoto({ img: '', type: '' });
      setOpenModal(false);
      fetchPhotos();
    } catch (error) {
      console.error('Error adding photo:', error);
    }
  };

  const handleUpdatePhoto = async () => {
    if (!currentPhoto) return;

    try {
      const formData = new FormData();
      if (currentPhoto.img instanceof File) {
        formData.append('img', currentPhoto.img);
      }
      formData.append('type', currentPhoto.type);

      await axios.put(
        `http://localhost:3000/api/v1/photos/${currentPhoto._id}`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      setOpenEditModal(false);
      setCurrentPhoto(null);
      fetchPhotos();
    } catch (error) {
      console.error('Error updating photo:', error);
    }
  };

  const handleDeletePhoto = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/photos/${id}`);
      fetchPhotos();
    } catch (error) {
      console.error('Error deleting photo:', error);
    }
  };

  return (
    <div>
      <Typography variant='h4' gutterBottom>
        Photos
      </Typography>
      <Button
        variant='contained'
        color='primary'
        onClick={() => setOpenModal(true)}
        sx={{ mb: 2 }}
      >
        Add Photo
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {photos.map((photo) => (
              <TableRow key={photo._id}>
                <TableCell>
                  <img
                    src={photo.img}
                    alt={photo.type}
                    style={{
                      width: 100,
                      height: 100,
                      objectFit: 'cover',
                      borderRadius: 8,
                    }}
                  />
                </TableCell>
                <TableCell>{photo.type}</TableCell>
                <TableCell>
                  {new Date(photo.createdAt).toDateString()}
                </TableCell>
                <TableCell>
                  <Button
                    color='primary'
                    onClick={() => {
                      setCurrentPhoto(photo);
                      setOpenEditModal(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    color='error'
                    onClick={() => handleDeletePhoto(photo._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Photo Modal */}
      <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        <DialogTitle>Add New Photo</DialogTitle>
        <DialogContent>
          <Input
            type='file'
            fullWidth
            onChange={(e) =>
              setNewPhoto({ ...newPhoto, img: e.target.files[0] })
            }
            margin='dense'
          />
          <TextField
            label='Type'
            fullWidth
            value={newPhoto.type}
            onChange={(e) => setNewPhoto({ ...newPhoto, type: e.target.value })}
            margin='dense'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)}>Cancel</Button>
          <Button onClick={handleAddPhoto}>Add</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Photo Modal */}
      <Dialog open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <DialogTitle>Edit Photo</DialogTitle>
        <DialogContent>
          <Input
            type='file'
            fullWidth
            onChange={(e) =>
              setCurrentPhoto({ ...currentPhoto, img: e.target.files[0] })
            }
            margin='dense'
          />
          <TextField
            label='Type'
            fullWidth
            value={currentPhoto?.type || ''}
            onChange={(e) =>
              setCurrentPhoto({ ...currentPhoto, type: e.target.value })
            }
            margin='dense'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditModal(false)}>Cancel</Button>
          <Button onClick={handleUpdatePhoto}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PhotosTab;
