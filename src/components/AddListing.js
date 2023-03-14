import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addListing } from '../redux/actions';
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
} from '@mui/material';

const mapDispatchToProps = {
  addListing: addListing,
};

function AddListing({ addListing }) {
  const [businessName, setBusinessName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [hours, setHours] = useState('');
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newListing = {
      businessName,
      description,
      address,
      hours,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
    };
    addListing(newListing);
    setBusinessName('');
    setDescription('');
    setAddress('');
    setHours('');
    setLat();
    setLng();
  };

  return (
    <Card sx={{ minWidth: 475, minHeight: 475, backgroundColor: '#f0eded' }}>
      <CardHeader title='Add Listing' />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label='Business Name'
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            required
            sx={{ marginBottom: 0.5 }}
          />
          <br />
          <TextField
            fullWidth
            label='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            sx={{ marginTop: 0.5, marginBottom: 0.5 }}
          />
          <br />
          <TextField
            fullWidth
            label='Address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            sx={{ marginTop: 0.5, marginBottom: 0.5 }}
          />
          <br />
          <TextField
            fullWidth
            label='Hours'
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            required
          />
          <br />
          <TextField
            fullWidth
            label='Latitude'
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            required
            sx={{ marginTop: 0.5, marginBottom: 0.5 }}
          />
          <br />
          <TextField
            fullWidth
            label='Longitude'
            value={lng}
            onChange={(e) => setLng(e.target.value)}
            required
            sx={{ marginTop: 0.5 }}
          />
          <br />
          <Button
            type='submit'
            variant='contained'
            sx={{
              backgroundColor: '#4d6e94',
              marginTop: 1,
              '&:hover': {
                background: '#283544',
              },
            }}
          >
            Add Listing
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default connect(null, mapDispatchToProps)(AddListing);
