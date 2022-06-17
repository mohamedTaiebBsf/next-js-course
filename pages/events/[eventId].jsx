import { useRouter } from "next/router";
import React from "react";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import ErrorAlert from "../../components/ui/error-alert";
import { getEventById } from "../../dummy-data";

function EventDetailPage() {
  const { query } = useRouter();
  const event = getEventById(query.eventId);

  if (!event) return <ErrorAlert>Event not found!</ErrorAlert>;

  return (
    <React.Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </React.Fragment>
  );
}

export default EventDetailPage;
