/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import ModalDialog from 'react-bootstrap/ModalDialog'

export default function MyModal(props) {
  const { tempevent, onHide, onSubmit, onHandleChange } = props
  const { title, start, time, backgroundColor, notes } = tempevent
  return (
    <Modal
      {...props}
      size="sm"
      dialogAs={ModalDialog}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {tempevent.start}
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Control
            type="text"
            name="title"
            placeholder="event name"
            value={title}
            onChange={onHandleChange}
            required />
          <Form.Control
            type="date"
            name="start"
            placeholder="event date"
            value={start}
            onChange={onHandleChange}
            required />
          <Form.Control
            type="time"
            name="time"
            placeholder="event time"
            value={time}
            onChange={onHandleChange} />
          <Form.Control
            type="color"
            name="backgroundColor"
            value={backgroundColor}
            onChange={onHandleChange} />
          <Form.Control
            type="text"
            name="notes"
            placeholder="notes"
            value={notes}
            onChange={onHandleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button type="button" onClick={onHide} left>Cancel</Button>
          <Button type="submit">Save</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

