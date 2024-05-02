import React from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid
} from "@mui/material";

// ** Global css style
import "../styles/globals.css";

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

const Home = () => {
  return (
    <Box className="container">
      <Box>
        <Typography variant="h3" sx={{ fontWeight: 600 }}>
          Events
        </Typography>
      </Box>

      <Box>
      <Grid container spacing={2}>
      {eventsData.map((event, index) => {
        console.log("data: ", event);
        return (
          <Grid item xs={6} md={3} key={event.id}>
            <Card>
              <CardContent>
                <Box>
                  <Box sx={{ mb: "15px" }}>
                    <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
                      {event.eventName}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography sx={{ fontWeight: 600 }}>Date:</Typography>
                    <Typography>{event.date}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography sx={{ fontWeight: 600 }}>Time:</Typography>
                    <Typography>{event.time}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography sx={{ fontWeight: 600 }}>Vanue:</Typography>
                    <Typography>{event.venue}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography sx={{ fontWeight: 600 }}>
                      Availability:
                    </Typography>
                    <Typography>{event.availability} seats</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: "15px",
                    }}
                  >
                    <Button
                      LinkComponent={Link}
                      variant="contained"
                      href={`/${event.id}`}
                    >
                      View Details
                    </Button>
                    <Button variant="contained">Book Ticket</Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
      </Box>
    </Box>
  );
};

export default Home;
