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
import StarRatings from './react-star-ratings';

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
    { id: uuidv4(), brand: '', style: '', type: '', state: 0, updateNeeded: 'unknown', retrofit: 'unknown', tuneup: 'unknown', investment: '', others: '' },
  ]);
  const [medias, setmedias] = useState([
    { id: uuidv4(), brand: '', type: '', usageYear: '', satisfaction: 0, discription: '' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Machines", machines);
    console.log("Medias", medias);
  };


  const handleChangeInputMachine = (id, event) => {
    const newMachines = machines.map(i => {
      if (id === i.id) {
        console.log(event.target)
        i[event.target.name] = event.target.value
      }
      return i;
    })

    setmachines(newMachines);
  }

  const handleChangeInputMedia = (id, event) => {
    const newMedia = medias.map(i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })

    setmedias(newMedia);
  }

  const handleAddFieldsMachines = () => {
    setmachines([...machines, { id: uuidv4(), brand: '', style: '', type: '', state: 0, updateNeeded: 'unknown', retrofit: 'unknown', tuneup: 'unknown', investment: '', others: '' }])
  }

  const handleAddFieldsMedias = () => {
    let state = uuidv4()
    setmedias([...medias, { id: uuidv4(), brand: '', type: '', usageYear: '', satisfaction: 0, discription: '' }])
  }

  const handleRemoveFieldsMachines = id => {
    console.log(machines.length)
    if (machines.length >= 2) {
      const values = [...machines];
      values.splice(values.findIndex(value => value.id === id), 1);
      setmachines(values);
    }
  }

  const handleRemoveFieldsMedias = id => {
    console.log(medias.length)
    if (medias.length >= 2) {
      const values = [...medias];
      values.splice(values.findIndex(value => value.id === id), 1);
      setmedias(values);
    }
  }

  return (
    <Container>
      <h1>Kunden Check</h1>
      <form className={classes.root} onSubmit={handleSubmit}> {/* onSubmit={handleSubmit}, action="https://httpbin.org/post" method="post" */}
        <h2>Anlagen</h2>
        {machines.map(machines => (
          <div className="machines" key={machines.id}>
            <label>Anlagenart</label> <select className="form-control" name="style" onChange={event => handleChangeInputMachine(machines.id, event)}>
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
              className="from-textfield"
              value={machines.brand}
              onChange={event => handleChangeInputMachine(machines.id, event)}
            />
            
            <TextField
              name="type"
              label="Typ"
              variant="filled"
              className="from-textfield"
              value={machines.type}
              onChange={event => handleChangeInputMachine(machines.id, event)}
            />
            <div>
              <label>Zustand
                <Rating
                  name={('statee')/*'state' + machines.id).replace(/-/g, '').replace(/[0-9]/g, '').substring(0,6)*/}
                  value={machines.state}
                  precision={0.5}
                  onChange={event => handleChangeInputMachine(machines.id, event)}
                /></label>
            </div>
            <div className="form-group">
              <label>Analge erneuerungsbedürftig?</label> <select className="form-control" name="updateNeeded" onChange={event => handleChangeInputMachine(machines.id, event)}>
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
              <label>Interesse an Retrofit? <i>Karte abgegeben?</i></label> <select className="form-control" name="retrofit" onChange={event => handleChangeInputMachine(machines.id, event)}>
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
              <label>Interesse an TuneUp? <i>Karte abgegeben?</i></label> <select className="form-control" name="tuneup" onChange={event => handleChangeInputMachine(machines.id, event)}>
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
              onChange={event => handleChangeInputMachine(machines.id, event)}
            />

            <label>
              <textarea name="others"
                label="Sonstiges"
                placeholder="Sonstiges"
                variant="filled"
                value={machines.others}
                onChange={event => handleChangeInputMachine(machines.id, event)} />
            </label>
            <IconButton disabled={machines.length === 1} onClick={() => handleRemoveFieldsMachines(machines.id)}>
              <RemoveIcon />
            </IconButton>
          </div>
        ))}
        <IconButton
          onClick={handleAddFieldsMachines}
        >
          <AddIcon />
        </IconButton>
        <div class="form-group">
          <h2>Verbrauchsmittel</h2>


          <div className="media">

            <label>Fremdprodukt(e)</label> <select class="form-control" name="selectbox_otherProducts">
              <option value="no">
                Nein
              </option>

              <option value="yes">
                Ja
              </option>
            </select>
          </div>

          {medias.map(medias => (
            <div className="machines" key={medias.id}>
              <TextField
                name="brand"
                label="Hersteller"
                variant="filled"
                className="from-textfield"
                value={medias.brand}
                onChange={event => handleChangeInputMedia(medias.id, event)}
              />
              <TextField
                name="type"
                label="Typ"
                variant="filled"
                className="from-textfield"
                value={medias.type}
                onChange={event => handleChangeInputMedia(medias.id, event)}
              />

              <TextField
                name="usageYear"
                label="Jahresverbrauch"
                variant="filled"
                className="from-textfield"
                value={medias.usageYear}
                onChange={event => handleChangeInputMedia(medias.id, event)}
              />
              <label>Zufriedenheit
                <Rating
                  name="satisfaction"
                  value={medias.satisfaction}
                  precision={0.5}
                  onChange={event => handleChangeInputMedia(medias.id, event)}
                /></label>
              <label>
                <textarea name="discription"
                  label="Beschreibung"
                  placeholder="Beschreibung Zufriedenheit"
                  variant="filled"
                  value={medias.discription}
                  onChange={event => handleChangeInputMedia(medias.id, event)} />
              </label>







              <IconButton disabled={medias.length === 1} onClick={() => handleRemoveFieldsMedias(medias.id)}>
                <RemoveIcon />
              </IconButton>
            </div>))}


          <IconButton
            onClick={handleAddFieldsMedias}
          >
            <AddIcon />
          </IconButton>

        </div>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<Icon>send</Icon>}
          onClick={handleSubmit}
        >Send</Button>
      </form>{/* onClick={handleSubmit}, value="send"  */}
    </Container>
  );
}

export default App;