import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetailsPage = () => {
  const { eventId } = useParams<{ eventId: string }>();

  return (
    <div className="event-details-page">
      <div className="container">
        <h1>Event Details: {eventId}</h1>
        <p>This page will display details for the selected event.</p>
      </div>
    </div>
  );
};

export default EventDetailsPage;
