"use client";

import React, { useEffect, useState } from "react";

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

const eventsData = [
    {
      id: 1,
      eventName: "Stand-up Comedy Night",
      date: "2024-05-10",
      time: "20:00",
      venue: "Laugh Factory",
      availability: 150,
      ticketPrice: 20.0,
    },
    {
      id: 2,
      eventName: "Improv Comedy Show",
      date: "2024-05-15",
      time: "19:30",
      venue: "Funny Bone Theater",
      availability: 100,
      ticketPrice: 15.0,
    },
    {
      id: 3,
      eventName: "Comedy Central Presents",
      date: "2024-05-20",
      time: "21:00",
      venue: "Comedy Club Central",
      availability: 80,
      ticketPrice: 25.0,
    },
    {
      id: 4,
      eventName: "Late Night Laughs",
      date: "2024-05-25",
      time: "22:00",
      venue: "The Chuckle Hut",
      availability: 120,
      ticketPrice: 18.0,
    },
    {
      id: 5,
      eventName: "Comedy Cafe Live",
      date: "2024-05-30",
      time: "20:30",
      venue: "Jokes R Us Cafe",
      availability: 90,
      ticketPrice: 12.5,
    },
  ];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BookingDialogbox = ({ open, handleClose, eventId,eventData }) => {
  const { availableTickets, bookTickets } = useTicketContext();

  const [numTickets, setNumTickets] = useState(1);
  const [error, setError] = useState(null);

  const eventDetails = eventsData.find((event) => event.id === eventId);

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
            <Typography>{eventDetails?.availability ? eventDetails?.availability : availableTickets}</Typography>
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
