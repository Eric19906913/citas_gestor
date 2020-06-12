import React from 'react';
import PropTypes from 'prop-types';

const Appt = ({appt, deleteAppt}) =>(
  <div className="cita">
    <p> Pet: <span>{appt.pet}</span></p>
    <p> Owner: <span>{appt.owner}</span></p>
    <p> Date: <span>{appt.date}</span></p>
    <p> Hour: <span>{appt.hour}</span></p>
    <p> Symptoms: <span>{appt.symptoms}</span></p>
    <button
      className="button eliminar u-full-width"
      onClick={() => deleteAppt(appt.id)}
    >Delete &times;</button>
  </div>
);

Appt.propTypes = {
  appt: PropTypes.object.isRequired,
  deleteAppt: PropTypes.func.isRequired
}


export default Appt;
