"use client";

import React, { useState } from "react";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import Slide from "@mui/material/Slide";

import { useTicketContext } from "./TicketContext";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BookingDialogbox = ({ open, handleClose, event }) => {
  const { availableTickets, bookTickets } = useTicketContext();

  const [numTickets, setNumTickets] = useState(1);
  const [error, setError] = useState(null);

  const handleNumTicketsChange = (event) => {
    setNumTickets(event.target.value);
    setError(null);
  };

  const handleBook = () => {
    if (numTickets <= 0) {
      setError("Please enter a valid number of tickets.");
      return;
    }

    if (numTickets > event.availability) {
      setError("Not enough tickets available.");
      return;
    }

    bookTickets(numTickets); // To Update available tickets count

    handleClose(); // Close the dialog after booking
  };

  console.log('event', event);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Book Tickets</DialogTitle>
      <DialogContent sx={{ pt: "10px !important" }}>
        <DialogContentText id="alert-dialog-slide-description">
          <Box sx={{ display: "flex", flexDirection: "row", pb: "5px" }}>
            <Typography sx={{ fontWeight: 600 }}>Available Tickets:</Typography>
            <Typography>{event.availability ? event.availability : availableTickets}</Typography>
          </Box>
          <TextField
            id="num-tickets"
            label="Number of Tickets"
            type="number"
            InputProps={{ inputProps: { min: 1 } }}
            value={numTickets}
            onChange={handleNumTicketsChange}
            fullWidth
            autoFocus
          />
          {error && (
            <Typography variant="body2" color="error" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleBook}>
          Book
        </Button>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookingDialogbox;
