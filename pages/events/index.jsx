import Head from "next/head";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/event-search";
import { getAllEvents } from "../../helpers/api-utils";

function AllEventsPage({ events }) {
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <div>
      <Head>
        <title>All Events</title>
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
}

export default AllEventsPage;

export async function getStaticProps(context) {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}
