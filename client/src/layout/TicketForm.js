import React from "react";
import FlightForm from "../components/FlightForm";
import Stripe from "../components/stripe";
export default function TicketForm() {
  return (
    <>
      <FlightForm />
      <Stripe />
    </>
  );
}
