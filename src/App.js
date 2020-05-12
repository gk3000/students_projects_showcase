import React from "react";
import "./styles.css";
import { Grid } from "./containers/Grid";
import RoB from './pics/reign_of_blood.jpg'
import YourWeather from './pics/josh_weather.png'
import Esperanza from './pics/esperanca_screen.png'
import Bookworld from './pics/bookworld_anders.png'
import Magda from './pics/magda-ecommerce.png'
import Soulfood from './pics/soulfood.png'

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
  <h4>Coded by Josh Arnott → <a href='http://josharnott.surge.sh' target='_blank' rel="noopener noreferrer">Portfolio page</a></h4>
  </section>
  <section className='project'>
  <div>
  <h1>Your weather</h1>
  <p>Native mobile weather app</p>
  </div>
  <a href='https://play.google.com/store/apps/details?id=your.weather.application&gl=ES' target='_blank' rel="noopener noreferrer">
  <img src={YourWeather} alt='Native mobile weather app coded by Josh Arnott' />
  </a>
  <h4>Coded by Josh Arnott → <a href='http://josharnott.surge.sh' target='_blank' rel="noopener noreferrer">Portfolio page</a></h4>
  </section>

    <section className='project'>
  <div>
  <h1><a href='http://104.248.94.252/soul-food/' target='_blank' rel="noopener noreferrer">Soulfood</a></h1>
  <p>Home-cooked food marketplace</p>
  </div>
  <a href='http://104.248.94.252/soul-food/' target='_blank' rel="noopener noreferrer">
  <img src={Soulfood} alt='Soulfood, home-cookedmarketplace coded by Magda Freitas' />
  </a>
  <h4>Coded by Anna Chew → <a href='http://annachew.surge.sh' target='_blank' rel="noopener noreferrer">Portfolio page</a>
  </h4>
  </section>

  <section className='project'>
  <div>
  <h1>Esperança</h1>
  <p>Volunteer community in Barcelona</p>
  </div>
  <a href='http://68.183.215.224' target='_blank' rel="noopener noreferrer">
  <img src={Esperanza} alt='Esperanza app coded by Daniel Dick' />
  </a>
  <h4>Coded by Daniel Dick → <a href='https://www.daniel-d.dev' target='_blank' rel="noopener noreferrer">Portfolio page</a></h4>
  </section>

   <section className='project'>
  <div>
  <h1><a href='http://104.248.94.252/book-world/' target='_blank' rel="noopener noreferrer">Bookworld</a></h1>
  <p>Online book store</p>
  </div>
  <a href='http://104.248.94.252/book-world/' target='_blank' rel="noopener noreferrer">
  <img src={Bookworld} alt='Bookworld online book store app coded by Anders Tobias Nicolaysen' />
  </a>
  <h4>Coded by Anders Tobias Nicolaysen 
{/*  → <a href='https://www.daniel-d.dev' target='_blank' rel="noopener noreferrer">Portfolio page</a>*/}
  </h4>
  </section>

  <section className='project'>
  <div>
  <h1><a href='http://104.248.94.252/magda-commerce/' target='_blank' rel="noopener noreferrer">Online shop</a></h1>
  <p>eCommerce web project</p>
  </div>
  <a href='http://104.248.94.252/magda-commerce/' target='_blank' rel="noopener noreferrer">
  <img src={Magda} alt='Bookworld online book store app coded by Magda Freitas' />
  </a>
  <h4>Coded by Magda Freitas 
{/*  → <a href='https://www.daniel-d.dev' target='_blank' rel="noopener noreferrer">Portfolio page</a>*/}
  </h4>
  </section>


  

  </Grid>
  </div>
  );
}
