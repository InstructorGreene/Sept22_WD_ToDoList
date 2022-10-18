import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

function Add(props) {
  const [formValues, changeFormValues] = useState({
    id: 0,
    task: "",
    complete: false,
  });

  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-top-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };

  // handle chnaging the form
  const handleChange = (event) => {
    let newVal = event.target.value;
    let keyToChange = event.target.name;
    const newState = { ...formValues };

    if (event.target.name === "complete") {
      newState[keyToChange] = !formValues.complete;
    } else {
      newState[keyToChange] = newVal;
    }
    changeFormValues(newState);
  };

  const submitHandler = () => {
    props.changeTodos((prevState) => {
      // make a shallow duplicate of the prev state
      let newState = [...prevState, formValues];
      return newState;
    });
    toastr["success"]("Todo added", "Success");
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="taskID">
          <Form.Label> Task ID</Form.Label>
          <Form.Control
            name="id"
            value={formValues.id}
            type="number"
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </Form.Group>

        <Form.Group controlId="taskDescription">
          <Form.Label> Description</Form.Label>
          <Form.Control
            value={formValues.task}
            name="task"
            type="text"
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </Form.Group>

        <Form.Group controlId="complete">
          <Form.Check
            type="checkbox"
            name="complete"
            checked={formValues.checked}
            id="complete"
            label="Completed?"
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </Form.Group>

        <Button
          variant="primary"
          onClick={() => {
            submitHandler();
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Add;
