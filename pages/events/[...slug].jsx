import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import { API_URL } from "../../helpers/api-utils";

function FilteredEventsPage() {
  const [loadedEvents, setLoadedEvents] = useState();
  const filterData = useRouter().query.slug;

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(API_URL + "/events.json", fetcher);

  useEffect(() => {
    if (data) {
      let events = [];

      for (const key in data) {
        events.push({ id: key, ...data[key] });
      }

      setLoadedEvents(events);
    }
  }, [data]);

  let pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta name="description" content="A list of filtered events." />
    </Head>
  );

  if (!loadedEvents)
    return (
      <React.Fragment>
        {pageHeadData}
        <p className="center">Loading...</p>
      </React.Fragment>
    );

  const numYear = +filterData[0];
  const numMonth = +filterData[1];

  pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={`All events for ${numMonth}/${numYear}.`}
      />
    </Head>
  );

  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12 ||
    error
  ) {
    return (
      <React.Fragment>
        {pageHeadData}
        <ErrorAlert>Invalid Filter. Please adjust your values!</ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </React.Fragment>
    );
  }

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);

    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    );
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <React.Fragment>
        {pageHeadData}
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
      {pageHeadData}
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </React.Fragment>
  );
}

export default FilteredEventsPage;

// export async function getServerSideProps(context) {
//   const { params } = context;
//   const filterData = params.slug;

//   const numYear = +filterData[0];
//   const numMonth = +filterData[1];

//   if (
//     isNaN(numMonth) ||
//     isNaN(numYear) ||
//     numYear > 2030 ||
//     numYear < 2021 ||
//     numMonth < 1 ||
//     numMonth > 12
//   ) {
//     return {
//       props: { hasError: true },
//     };
//   }

//   const filteredEvents = await getFilteredEvents({
//     year: numYear,
//     month: numMonth,
//   });

//   return {
//     props: {
//       filteredEvents,
//       date: JSON.stringify(new Date(numYear, numMonth - 1)),
//     },
//   };
// }
