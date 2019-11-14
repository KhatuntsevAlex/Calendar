/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import bootstrapPlugin from '@fullcalendar/bootstrap'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import moment from 'moment'
import { ButtonToolbar } from 'react-bootstrap'
import MyModal from '../Modal/Modal'
import calendarSettings from './calendarSettings'

export default function EventCalendar() {

  const staticEventSettings = {
    editable: true,
    startEditable: true,
    durationEditable: true,
    resourceEditable: true,
    allDay: true,
    backgroundColor: '',
    borderColor: '',
  }

  const [events, setEvents] = useState([
    {
      ...staticEventSettings,
      id: 1,
      title: 'event 1',
      start: '2019-11-13',
    },
  ])
  const counter = events.length + 1
  const [show, setShow] = useState(false)
  const [tempEvent, setTempEvent] = useState({
    ...staticEventSettings,
    title: '',
    start: '',
  })
  const calendarRef = React.createRef()

  // ADD AN EVENT TO A DATE
  const onDateClick = event => {
    setTempEvent({ ...tempEvent, start: event.dateStr })
    setShow(true)
  }

  // CHANGING EVENTS
  const onEventClick = ({ event }) => {
    let { id, start } = event
    const {title, backgroundColor, borderColor, time, notes} = event
    start = moment(start).format('YYYY-MM-DD')
    id = +id
    setTempEvent({ start, id, title, backgroundColor, borderColor, time, notes })
    setShow(true)
  }

  // SUBMIT IN MODAL
  const onHandleSubmit = event => {
    event.preventDefault()
    const { backgroundColor } = event.target

    // IF EVENT WAS CLICKED - UPDATE EVENT ONSUBMIT
    if (tempEvent.id) {
      setEvents([...events.map(e => e.id === (tempEvent.id) ? { ...e, ...tempEvent, borderColor: backgroundColor.value } : e)])
    } else { // ELSE ADD NEW EVENT
      setEvents([
        ...events,
        {
          ...staticEventSettings,
          id: counter,
          ...tempEvent,
          borderColor: backgroundColor.value,
        },
      ])
    }

    setTempEvent({})
    setShow(false)
  }

  // FORMCONTROLS HANDLER IN MODAL
  const onHandleChange = e => {
    setTempEvent({ ...tempEvent, [e.target.name]: e.target.value })
  }

  return (
    <ButtonToolbar>
      <h2>Calendar</h2>
      <div className="calendar-wrapper">
        <FullCalendar
          ref={calendarRef}
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            listPlugin,
            interactionPlugin,
            bootstrapPlugin,
          ]}
          events={events}
          dateClick={onDateClick}
          eventClick={onEventClick}
          {...calendarSettings}
        />
      </div>
      <MyModal
        show={show}
        onSubmit={onHandleSubmit}
        onHide={() => setShow(false)}
        tempevent={tempEvent}
        onHandleChange={onHandleChange}
      />
    </ButtonToolbar>
  )
}