import React from "react";
import "./styles.css";
import { Grid } from "./containers/Grid";
import RoB from './pics/reign_of_blood.jpg'
import YourWeather from './pics/josh_weather.png'
import Esperanza from './pics/esperanca_screen.png'

export default function App() {
  return (
    <div className="App">
    <h1 onClick={()=>window.location.href='https://barcelonacodeschool.com'}>Barcelona Code School</h1>
    <h2>Alumni projects showcase</h2>
    <hr/>


  <Grid className={'grid'} columns={"3"}>
  <section className='project'>
  <div>
  <h1>Reign of Blood</h1>
  <p>Online game with in-app purchases</p>
  </div>
  <a href='http://188.166.47.105' target='_blank' rel="noopener noreferrer">
  <img src={RoB} alt='Reign of Blood online game coded by Josh Arnott' />
  </a>
  <h2>Coded by Josh Arnott → <a href='http://josharnott.surge.sh' target='_blank' rel="noopener noreferrer">Portfolio page</a></h2>
  </section>
  <section className='project'>
  <div>
  <h1>Your weather</h1>
  <p>Native mobile weather app</p>
  </div>
  <a href='https://play.google.com/store/apps/details?id=your.weather.application&gl=ES' target='_blank' rel="noopener noreferrer">
  <img src={YourWeather} alt='Native mobile weather app coded by Josh Arnott' />
  </a>
  <h2>Coded by Josh Arnott → <a href='http://josharnott.surge.sh' target='_blank' rel="noopener noreferrer">Portfolio page</a></h2>
  </section>

  <section className='project'>
  <div>
  <h1>Esperança</h1>
  <p>Volunteer community in Barcelona</p>
  </div>
  <a href='http://68.183.215.224' target='_blank' rel="noopener noreferrer">
  <img src={Esperanza} alt='Esperanza app coded by Daniel Dick' />
  </a>
  <h2>Coded by Daniel Dick → <a href='https://www.daniel-d.dev' target='_blank' rel="noopener noreferrer">Portfolio page</a></h2>
  </section>

  </Grid>
  </div>
  );
}
