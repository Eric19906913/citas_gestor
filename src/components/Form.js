import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Form = ({makeAppt}) =>{

  const [appt, setAppt] = useState({
    pet:'',
    owner:'',
    date:'',
    hour:'',
    symptoms:''
  });

  const [error, updateError] = useState(false);
  //esta funcion se ejecuta cuando el usuario hace cambios en el input
  const execState = (e) =>{
    setAppt({
      ...appt,
      [e.target.name]: e.target.value
    })
  }

  const {pet, owner, date, hour, symptoms} = appt;

  //funcion al enviar form
  const submitAppt = e => {
    e.preventDefault();

    if(pet.trim() === '' || owner.trim() === '' || date.trim() === '' ||
        hour.trim() === '' || symptoms.trim() === ''){
      updateError(true);
      return;
    }
    updateError(false);
    //Genera un Id para la cita
    appt.id = uuidv4();
    //manda la cita al app
    makeAppt(appt);
    //reiniciar form
    setAppt({
      pet:'',
      owner:'',
      date:'',
      hour:'',
      symptoms:''
    });

  }

  return (
    <Fragment>
      <h2>Create an appointment</h2>

      {error ? <p className="alerta-error">All fields are required</p> :null}

      <form
        onSubmit={submitAppt}
      >
        <label>Pet Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet name"
          onChange={execState}
          value={pet}
        />
        <label>Owner Name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner name"
          onChange={execState}
          value={owner}
        />
        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={execState}
          value={date}
        />
        <label>Hour</label>
        <input
          type="time"
          name="hour"
          className="u-full-width"
          onChange={execState}
          value={hour}
        />
        <label>Symptoms</label>
        <textarea
          className="u-full-width"
          name="symptoms"
          onChange={execState}
          value={symptoms}
        ></textarea>
        <button
          type="submit"
          className="u-full-width button-primary"
        >Make appointment</button>
      </form>
    </Fragment>
  );
}

Form.propTypes = {
  makeAppt: PropTypes.func.isRequired
}

export default Form;
