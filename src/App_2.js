import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import Rating from '@material-ui/lab/Rating';
import { v4 as uuidv4 } from 'uuid';
import './App_2.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}))

function App() {
  const classes = useStyles()
  const [machines, setmachines] = useState([
    { id: uuidv4(), brand: '', style:'' ,type: '', state:0, updateNeeded:'unknown', retrofit:'unknown', tuneup:'unknown', investment:'', others:''},
  ]);
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), firstName: '', lastName: '' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", machines);
  };

  const handleChangeInput = (id, event) => {
    const newMachines = machines.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setmachines(newMachines);
  }

  const handleAddFields = () => {
    setmachines([...machines, { id: uuidv4(), brand: '', style:'' ,type: '', state:0, updateNeeded:'unknown', retrofit:'unknown', tuneup:'unknown', investment:'', others:''}])
  }

  const handleRemoveFields = id => {
    console.log(machines.length) 
    if (machines.length >= 2){
      const values  = [...machines];
      values.splice(values.findIndex(value => value.id === id), 1);
      setmachines(values);
    }
  }

  return (
    <Container>
      <h1>Kunden Check</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        { machines.map(machines => (
          <div className="machines" key={machines.id}>
            <label>Anlagenart</label> <select className="form-control" name="style" onChange={event => handleChangeInput(machines.id, event)}>
                    <option value="unknown">
                        Bitte Wählen
                    </option>
                    <option value="mass finishing">
                        Gleitschleifen
                    </option>
                    <option value="blasting">
                        Strahlen
                    </option>
            </select>
            <TextField
              name="brand"
              label="Hersteller"
              variant="filled"
              value={machines.brand}
              onChange={event => handleChangeInput(machines.id, event)}
            />
            
            <TextField
              name="type"
              label="Typ"
              variant="filled"
              value={machines.type}
              onChange={event => handleChangeInput(machines.id, event)}
            />
            <div>
            <label>Zustand
            <Rating
                name="state"
                value={machines.state}
                precision={0.5}
                onChange={event => handleChangeInput(machines.id, event)}
              /></label>
          </div>
        <div className="form-group">
                    <label>Analge erneuerungsbedürftig?</label> <select className="form-control" name="updateNeeded" onChange={event => handleChangeInput(machines.id, event)}>
                    <option value="unknown">
                        Bitte Wählen
                    </option>

                    <option value="no">
                        Nein
                    </option>
                
                    <option value="yes">
                        Ja
                    </option>
                    </select>
            </div>
            <div className="form-group">
                    <label>Interesse an Retrofit? <i>Karte abgegeben?</i></label> <select className="form-control" name="retrofit" onChange={event => handleChangeInput(machines.id, event)}>
                    <option value="unknown">
                        Bitte Wählen
                    </option>

                    <option value="no">
                        Nein
                    </option>
                
                    <option value="yes">
                        Ja
                    </option>
                    </select>
            </div>

            <div className="form-group">
                    <label>Interesse an TuneUp? <i>Karte abgegeben?</i></label> <select className="form-control" name="retrofit" onChange={event => handleChangeInput(machines.id, event)}>
                    <option value="unknown">
                        Bitte Wählen
                    </option>

                    <option value="no">
                        Nein
                    </option>
                
                    <option value="yes">
                        Ja
                    </option>
                    </select>
            </div>
            <TextField
              name="investment"
              label="Investment geplant?"
              variant="filled"
              value={machines.investment}
              onChange={event => handleChangeInput(machines.id, event)}
            />

        <label>
          <textarea name="others"
              label="Sonstiges"
              variant="filled"
              value={machines.others}
              onChange={event => handleChangeInput(machines.id, event)}/>
        </label>
            <IconButton disabled={machines.length === 1} onClick={() => handleRemoveFields(machines.id)}>
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={handleAddFields}
            >
              <AddIcon />
            </IconButton>
          </div>
        )) }
        <Button
          className={classes.button}
          variant="contained" 
          color="primary" 
          type="submit" 
          endIcon={<Icon>send</Icon>}
          onClick={handleSubmit}
        >Send</Button>
      </form>
    </Container>
  );
}

export default App;