import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import { getFilteredEvents } from "../../dummy-data";

function FilteredEventsPage() {
  const filterData = useRouter().query.slug;

  if (!filterData) return <p className="center">Loading...</p>;

  const numYear = +filterData[0];
  const numMonth = +filterData[1];

  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <React.Fragment>
        <ErrorAlert>Invalid Filter. Please adjust your values!</ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </React.Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <React.Fragment>
        <ErrorAlert>No events found for chosen filter!</ErrorAlert>;
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </React.Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <React.Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </React.Fragment>
  );
}

export default FilteredEventsPage;
