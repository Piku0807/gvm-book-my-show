'use client';

import React, { createContext, useState, useContext } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [availableTickets, setAvailableTickets] = useState(100);

  const bookTickets = (numTickets) => {
    setAvailableTickets((prevTickets) => prevTickets - numTickets);
  };

  return (
    <TicketContext.Provider value={{ availableTickets, bookTickets }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTicketContext = () => useContext(TicketContext);
