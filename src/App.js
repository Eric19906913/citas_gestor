import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/Form';
import Appt from './components/Appt';

function App() {

  let initialAppts = JSON.parse(localStorage.getItem('appts'));
  if(!initialAppts){
    initialAppts = [];
  }

  const [appts, setAppts] = useState(initialAppts);

  //useEffect hace algo cuando el state cambia
  useEffect(()=>{
    if(initialAppts){
      localStorage.setItem('appts', JSON.stringify(appts));
    }else{
      localStorage.setItem('appts', JSON.stringify([]));
    }
  }, [appts,initialAppts]); //se le pasa un arraya vacio para que se ejecute una sola vez

  const makeAppt = (appt) =>{
    setAppts([
      ...appts,
      appt
    ])
  }
  //Funcion para eliminar citas por ID
  const deleteAppt = id =>{
    const apptNew = appts.filter(appt => appt.id !== id);
    setAppts(apptNew);
  }

  const title = appts.length === 0 ? 'There is no appointments' :'Appointments';

  return (
    <Fragment>
    <h1>Patient administrator</h1>

    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Form
            makeAppt={makeAppt}
          />
        </div>
        <div className="one-half column">
          <h2>{title}</h2>
          {appts.map(appt=>(
            <Appt
              key={appt.id}
              appt={appt}
              deleteAppt={deleteAppt}
            />
          ))}
        </div>
      </div>
    </div>
    </Fragment>
  );
}


export default App;
