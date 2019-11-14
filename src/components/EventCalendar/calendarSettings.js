const calendarSettings = {  
  defaultView: 'dayGridMonth',
  header: {
    left: 'today,prev,next',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,list',
  },
  buttonText: {
    today: 'Today',
    prev: 'Back',
    next: 'Next',
    list: 'Agenda',
    dayGridMonth: 'Month',
    timeGridWeek: 'Week',
    timeGridDay: 'Day',
  },
  /* customButtons: {
    Agenda: {
      text: 'Agenda',
    },
  },   */
  buttonIcons: {
    prev: '',
    next: '',
  },
  views: {
    dayGridMonth: {
      titleFormat: { year: 'numeric', month: 'long' },
    },
    timeGridWeek: {
      titleFormat: { month: 'short', day: 'numeric' },
      columnHeaderFormat: { weekday: 'short', month: 'numeric', day: 'numeric', omitCommas: true },
      slotDuration: '02:00',
      slotLabelFormat: {
        hour: 'numeric',
        minute: '2-digit',
      },
    },
    timeGridDay: {
      titleFormat: { month: 'short', day: 'numeric', weekday: 'long', omitCommas: true },
      columnHeaderFormat: { weekday: 'short', month: 'numeric', day: 'numeric', omitCommas: true },
      slotDuration: '02:00',
      slotLabelFormat: {
        hour: 'numeric',
        minute: '2-digit',
      },
    },
  },  
  droppable: true,
  selectable: true,
  selecMirror: true,
  themeSystem: "bootstrap",
}

export default calendarSettings