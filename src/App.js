import './App.css';
import { AppBar, Toolbar, Tabs, Tab, Box, TextField, Button, Checkbox,Typography } from '@material-ui/core';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles'
import TranspositionCipher from './Transpo';
import React, { Component } from 'react';
import SustitutionCipher from './Susti';

function TabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


class Table extends React.Component {

  render() {
    return (
        <table>
          <tbody>
            {this.props.tabla.map((item, index) => {
              return (
                <tr key={index}>
                  {
                    item.map((val, ind) => {
                      return (
                        <td style={{border:'1px solid black',width:'20px',height:'20px'}} key={`${val}${ind}`}>{val}</td>
                      );
                    })
                  }
                </tr>
              );
            })}
          </tbody>
        </table>
    );
  }
}

function App() {

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [tabla, setTabla] = useState([[]]);
  const [texto, setTexto] = useState("");
  const [llave, setLlave] = useState(1);
  const [textoEnc, setTextoEnc] = useState("");
  const [checked, setChecked] = useState(false);

  const [textoCesar, setTextoCesar] = useState("");
  const [textoEncCesar, setTextoEncCesar] = useState("");
  const [llaveCesar, setLlaveCesar] = useState(1);

  const t = new TranspositionCipher();
  const c = new SustitutionCipher();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
          Criptografia
        </Toolbar>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Transposición" />
          <Tab label="Sustitución" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Typography variant="h4">Fila y Columna</Typography>
        <form className={classes.root}>
          <div>
            <TextField id="outlined-basic"
              label="Texto Plano"
              variant="outlined"
              value={texto}
              onChange={event => setTexto(event.target.value)} />
          </div>
          <div>
            <TextField id="outlined-basic"
              label="Llave de Encriptado"
              variant="outlined"
              value={llave}
              onChange={event => setLlave(event.target.value)} />
          </div>

        </form>
        <Typography variant="h5">Tabla</Typography>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Table
            tabla={tabla}
          />
        </div>
        <div>
          Columnar
          <Checkbox
            checked={checked}
            onChange={(event) => {
              setChecked(event.target.checked)
            }}
          />
        </div>
        <div className={classes.root}>
          <Button variant="contained"
            color="primary"
            onClick={() => {
              t.setType(checked);
              let c = t.cipherText(texto, Number(llave));
              console.log(t.matrix);
              setTabla(t.matrix);
              setTextoEnc(c);
            }}
          >Cifrar</Button>
          <Button variant="contained"
            color="secondary"
            onClick={() => {
              let d = t.decrypyText(textoEnc, Number(llave));
              setTexto(d);
            }}
          >Descifrar</Button>
        </div>
        <TextField id="outlined-basic"
          label="Texto Cifrado"
          variant="outlined"
          value={textoEnc}
          onChange={event => setTextoEnc(event.target.value)}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Typography variant="h4">Cifrado de César</Typography>
      <form className={classes.root}>
          <div>
            <TextField id="outlined-basic"
              label="Texto Plano"
              variant="outlined"
              value={textoCesar}
              onChange={event => setTextoCesar(event.target.value)} />
          </div>
          <div>
            <TextField id="outlined-basic"
              label="Llave de Encriptado"
              variant="outlined"
              value={llaveCesar}
              onChange={event => setLlaveCesar(event.target.value)} />
          </div>

        </form>
        <div className={classes.root}>
          <Button variant="contained"
            color="primary"
            value={textoCesar}
            onClick={() => {
              var s = Number(llaveCesar);
              setTextoEncCesar(c.caesarShift(textoCesar,s));
            }}
          >Cifrar</Button>
          <Button variant="contained"
            color="secondary"
            value={textoEncCesar}
            onClick={() => {
              var s = Number(llaveCesar);
              setTextoCesar(c.caesarShift(textoEncCesar,s*-1));
            }}
          >Descifrar</Button>
        </div>
        <TextField id="outlined-basic"
              label="Texto Cifrado"
              variant="outlined"
              value={textoEncCesar}
              onChange={event => setTextoEncCesar(event.target.value)} />
      </TabPanel>

    </div>
  );
}

export default App;
