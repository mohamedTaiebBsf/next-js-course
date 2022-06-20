import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import { getFilteredEvents } from "../../helpers/api-utils";

function FilteredEventsPage({ date, filteredEvents, hasError }) {
  if (hasError) {
    return (
      <React.Fragment>
        <ErrorAlert>Invalid Filter. Please adjust your values!</ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </React.Fragment>
    );
  }

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

  return (
    <React.Fragment>
      <ResultsTitle date={JSON.parse(date)} />
      <EventList items={filteredEvents} />
    </React.Fragment>
  );
}

export default FilteredEventsPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const filterData = params.slug;

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
    return {
      props: { hasError: true },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      filteredEvents,
      date: JSON.stringify(new Date(numYear, numMonth - 1)),
    },
  };
}
