import { Box, Typography } from "@mui/material";
import React from "react";

const EventDetailedPage = () => {
  return (
    <Box>
      <Box>
        <Typography>Event title</Typography>
      </Box>

      <Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography sx={{ fontWeight: 600 }}>Date:</Typography>
          <Typography></Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography sx={{ fontWeight: 600 }}>Time:</Typography>
          <Typography></Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography sx={{ fontWeight: 600 }}>Vanue:</Typography>
          <Typography></Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography sx={{ fontWeight: 600 }}>Availability:</Typography>
          <Typography> seats</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EventDetaledPage;
