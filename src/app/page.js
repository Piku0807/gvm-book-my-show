import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

// ** Global css style
import "../styles/globals.css";
import EventListingPage from "@/components/EventListingPage";
import { TicketProvider } from "../components/TicketContext";

const Home = () => {
  
  return (
    <TicketProvider>
      <Box className="container">
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 600 }}>
            Events
          </Typography>
        </Box>

        <Box>
          <EventListingPage />
        </Box>
      </Box>
    </TicketProvider>
  );
};

export default Home;
