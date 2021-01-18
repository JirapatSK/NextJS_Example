import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Dashboard from "../../../components/Dashboard";

const localizer = momentLocalizer(moment);

const CalendarEventsExample = (props) => {
  return (
    <Dashboard {...props}>
      <Calendar
        localizer={localizer}
        events={[
          {
            start: moment().toDate(),
            end: moment().add(1, "days").toDate(),
            title: "Event 1",
          },

          {
            start: moment().add(5, "days").toDate(),
            end: moment().add(8, "days").toDate(),
            title: "Event 2",
          },
        ]}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={(e) => {
          console.log(e);
        }}
        style={{ height: 500 }}
      />
    </Dashboard>
  );
};

export default CalendarEventsExample;
