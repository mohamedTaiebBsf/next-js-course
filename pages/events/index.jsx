import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {
  return (
    <div>
      <EventList items={getAllEvents()} />
    </div>
  );
}

export default AllEventsPage;
