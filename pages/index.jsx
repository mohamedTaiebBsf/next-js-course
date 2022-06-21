import Head from "next/head";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";

function HomePage({ events }) {
  return (
    <div>
      <Head>
        <title>Nextjs Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventList items={events} />
    </div>
  );
}

export default HomePage;

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
