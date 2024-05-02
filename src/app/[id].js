import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

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

const EventDetailedPage = () => {
    const router = useRouter();

    const {query} = router;

    const eventDetailedData = eventsData.find((data) => data.id === parseInt(query.id))

    if (!eventDetailedData) {
        return <div>Event not found</div>;
    }

  return (
    <Box>
      <Box sx={{mb:'30px'}}>
        <Typography variant="h2" sx={{fontWeight: 800}}>{eventDetailedData.eventName}</Typography>
      </Box>

      <Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography sx={{ fontWeight: 600 }}>Date:</Typography>
          <Typography>{eventDetailedData.date}</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography sx={{ fontWeight: 600 }}>Time:</Typography>
          <Typography>{eventDetailedData.time}</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography sx={{ fontWeight: 600 }}>Vanue:</Typography>
          <Typography>{eventDetailedData.venue}</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography sx={{ fontWeight: 600 }}>Availability:</Typography>
          <Typography>{eventDetailedData.availability} seats</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EventDetailedPage;
