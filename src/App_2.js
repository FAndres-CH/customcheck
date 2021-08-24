import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/DeleteForever';
import AddIcon from '@material-ui/icons/AddCircle';
import SendIcon from '@material-ui/icons/Send';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import ReactStars from "react-rating-stars-component";
import './App_2.css'
import axios from 'axios';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

  const [surround, setsurround] = useState([
    { customer_companyname: '', customer_descript: '', need_sales: '', customer_contact_name: '', customer_contact_mail: '', customer_contact_phone: '' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Machines", machines);
    console.log("Medias", JSON.stringify(medias));
    const data = JSON.stringify({ surround: surround, machines: machines, medias: medias });
    console.log(data)
    const data1 = { "name": "Mike" };
    const api = 'https://uyuurxttnf.execute-api.eu-west-1.amazonaws.com/Prod';
    axios.post(api, data)
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
      });


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

  const handleChangeStarMachine = (id, event) => {
    console.log(event)
    const newMachines = machines.map(i => {
      if (id === i.id) {
        console.log(event.target)
        i['state'] = event
      }
      return i;
    })

    setmachines(newMachines);
  }

  const handleChangeStarMedia = (id, event) => {
    const newMedia = medias.map(i => {
      if (id === i.id) {
        i['satisfaction'] = event
      }
      return i;
    })

    setmedias(newMedia);
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

  const handleChangeSurround = (event) => {
    const newSurround = surround.map(i => {
      i[event.target.name] = event.target.value
      return i;
    })

    setsurround(newSurround);
  }

  const handleAddFieldsMachines = () => {
    setmachines([...machines, { id: uuidv4(), brand: '', style: '', type: '', state: 0, updateNeeded: 'unknown', retrofit: 'unknown', tuneup: 'unknown', investment: '', others: '' }])
  }

  const handleAddFieldsMedias = () => {
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
      <h1>KundenCheck</h1>
      <form className={classes.root} onSubmit={handleSubmit}> {/* onSubmit={handleSubmit}, action="https://httpbin.org/post" method="post" */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="accordingTitle">Kundenangaben</div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="customer">
              <TextField
                name="customer_companyname"
                label="Kunde"
                variant="filled"
                className="from-textfield"
                value={surround.customer_companyname}
                onChange={event => handleChangeSurround(event)}
              />
              <TextField
                name="customer_descript"
                label="Standortbeschreibung"
                variant="filled"
                className="from-textfield"
                value={surround.customer_descript}
                onChange={event => handleChangeSurround(event)}
              />

            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <div className="accordingTitle">Anlagen</div>
          </AccordionSummary>
          <AccordionDetails>
            {machines.map(machines => (
              <div className="machines" key={machines.id}>
                <label className="form-group">Anlagenart <select className="form-control" name="style" onChange={event => handleChangeInputMachine(machines.id, event)}>
                  <option value="unknown">
                    Bitte Wählen
                  </option>
                  <option value="mass finishing">
                    Gleitschleifen
                  </option>
                  <option value="blasting">
                    Strahlen
                  </option>
                </select></label>
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
                <div className="form-rate">
                  <label>Zustand
                    <ReactStars
                      count={5}
                      onChange={event => handleChangeStarMachine(machines.id, event)}
                      size={24}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffab2e"
                    /></label>
                </div>
                <div className="form-group">
                  <label>Analge erneuerungsbedürftig? <select className="form-control" name="updateNeeded" onChange={event => handleChangeInputMachine(machines.id, event)}>
                    <option value="unknown">
                      Bitte Wählen
                    </option>

                    <option value="no">
                      Nein
                    </option>

                    <option value="yes">
                      Ja
                    </option>
                  </select></label>
                </div>
                <div className="form-group">
                  <label>Interesse an Retrofit? <i>Karte abgegeben?</i> <select className="form-control" name="retrofit" onChange={event => handleChangeInputMachine(machines.id, event)}>
                    <option value="unknown">
                      Bitte Wählen
                    </option>

                    <option value="no">
                      Nein
                    </option>

                    <option value="yes">
                      Ja
                    </option>
                  </select></label>
                </div>

                <div className="form-group">
                  <label>Interesse an TuneUp? <i>Karte abgegeben?</i> <select className="form-control" name="tuneup" onChange={event => handleChangeInputMachine(machines.id, event)}>
                    <option value="unknown">
                      Bitte Wählen
                    </option>

                    <option value="no">
                      Nein
                    </option>

                    <option value="yes">
                      Ja
                    </option>
                  </select></label>
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
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <div className="accordingTitle">Verbrauchsmittel</div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div className="media">

                <label>Fremdprodukt(e) <select className="form-control" name="selectbox_otherProducts" onChange={event => handleChangeInputMedia(medias.id, event)}>
                  <option value="unknown">
                    Bitte Wählen
                  </option>

                  <option value="no">
                    Nein
                  </option>

                  <option value="yes">
                    Ja
                  </option>
                </select></label>
              </div>

              {medias.map(medias => (
                <div className="medias" key={medias.id}>
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
                  <label className="form-rate">Zufriedenheit
                    <ReactStars
                      count={5}
                      onChange={event => handleChangeStarMedia(medias.id, event)}
                      size={24}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffab2e"
                      color="#999999"
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
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <div className="accordingTitle">Verkauf</div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="sales">
              <label className="form-group">Kunde wünscht Kontaktaufnahme<select className="form-control" name="need_sales" onChange={event => handleChangeSurround(event)}>
                <option value="unknown">
                  Bitte Wählen
                </option>
                <option value="no">
                  Nein
                </option>

                <option value="yes">
                  Ja
                </option>
              </select></label>
              <TextField
                name="customer_contact_name"
                label="Kontaktperson"
                variant="filled"
                className="from-textfield"
                value={surround.customer_contact_name}
                onChange={event => handleChangeSurround(event)}
              />
              <TextField
                name="customer_contact_mail"
                label="Mail"
                variant="filled"
                className="from-textfield"
                value={surround.customer_contact_mail}
                onChange={event => handleChangeSurround(event)}
              />
              <TextField
                name="customer_contact_phone"
                label="Phone"
                variant="filled"
                className="from-textfield"
                value={surround.customer_contact_phone}
                onChange={event => handleChangeSurround(event)}
              />
            </div>
          </AccordionDetails>
        </Accordion>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<SendIcon />}
          onClick={handleSubmit}
        >Send</Button>
      </form>{/* onClick={handleSubmit}, value="send"  */}
    </Container>
  );
}

export default App;