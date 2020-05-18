import React from "react";
import "./styles.css";
import { Grid } from "./containers/Grid";
import RoB from './pics/reign_of_blood.jpg'
import YourWeather from './pics/josh_weather.png'
import Esperanza from './pics/esperanca_screen.jpg'
import Bookworld from './pics/bookworld_anders.jpg'
import Magda from './pics/magda-ecommerce.jpg'
import Soulfood from './pics/soulfood.jpg'
import Claro from './pics/claro_lucy_ux.jpg'
import Zolzar from './pics/zolzar.jpg'
import CCCB from './pics/cccb_brett.jpg'
import StyleShip from './pics/styleship.jpg'
import Subsala from './pics/subsala.jpg'
import Blanchette from './pics/blanchette.jpg'
import LAB from './pics/pandora_ecommerce.jpg'

export default function App() {
  return (
    <div className="App">
    <h1 onClick={()=>window.location.href='https://barcelonacodeschool.com'}>Barcelona Code School</h1>
    <h2>Alumni projects showcase</h2>
    <hr/>


    <Grid className={'grid'} columns={"3"}>

    <section className='project'>
    <div>
    <h1><a href='https://www.lucyburrluck.com/claro' target='_blank' rel="noopener noreferrer">Claro</a></h1>
    <p>Minimising frustration in the office space</p>
    </div>
    <a href='https://www.lucyburrluck.com/claro' target='_blank' rel="noopener noreferrer">
    <img src={Claro} alt='Soulfood, home-cookedmarketplace coded by Magda Freitas' />
    </a>
    <h4>UX Design by Lucy Burrluck → <a href='https://www.lucyburrluck.com' target='_blank' rel="noopener noreferrer">Portfolio page</a>
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
    <h1><a href='/book-world/' target='_blank' rel="noopener noreferrer">Bookworld</a></h1>
    <p>Online book store</p>
    </div>
    <a href='https://projects.barcelonacodeschool.com/book-world/' target='_blank' >
    <img src={Bookworld} alt='Bookworld online book store app coded by Anders Tobias Nicolaysen' />
    </a>
    <h4>Coded by Anders Tobias Nicolaysen 
  {/*  → <a href='https://www.daniel-d.dev' target='_blank' rel="noopener noreferrer">Portfolio page</a>*/}
  </h4>
  </section>

  <section className='project'>
  <div>
  <h1><a href='https://projects.barcelonacodeschool.com/magda-commerce/' target='_blank' rel="noopener noreferrer">Online shop</a></h1>
  <p>eCommerce web project</p>
  </div>
  <a href='https://projects.barcelonacodeschool.com/magda-commerce/' target='_blank' rel="noopener noreferrer">
  <img src={Magda} alt='Bookworld online book store app coded by Magda Freitas' />
  </a>
  <h4>Coded by Magda Freitas 
{/*  → <a href='https://www.daniel-d.dev' target='_blank' rel="noopener noreferrer">Portfolio page</a>*/}
</h4>
</section>




<section className='project'>
<div>
<h1><a href='https://projects.barcelonacodeschool.com/sub-sala-jacob/' target='_blank' rel="noopener noreferrer">Subsala</a></h1>
<p>Find a space to host your event!</p>
</div>
<a href='https://projects.barcelonacodeschool.com/sub-sala-jacob/' target='_blank' rel="noopener noreferrer">
<img src={Subsala} alt='SubSala: Find a space to host your event!'/></a>
<h4>Coded by Jacob Whitt → <a href='https://jacobwhitt.netlify.app' target='_blank' rel="noopener noreferrer">Portfolio page</a>
</h4>
</section>


<section className='project'>
<div>
<h1><a href='https://projects.barcelonacodeschool.com/kim-commerce/' target='_blank' rel="noopener noreferrer">Style Ship</a></h1>
<p>eCommerce web store</p>
</div>
<a href='https://projects.barcelonacodeschool.com/kim-commerce/' target='_blank' rel="noopener noreferrer">
<img src={StyleShip} alt='Style Ship eCommerce web store'/></a>
<h4>Coded by Eunyoung Kim → <a href='https://barcelonacodeschool.com/files/cv/CV_EunyoungKim.pdf' target='_blank' rel="noopener noreferrer">Portfolio page</a>
</h4>
</section>

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
<h1><a href='https://projects.barcelonacodeschool.com/soul-food/' target='_blank' rel="noopener noreferrer">Soulfood</a></h1>
<p>Home-cooked food marketplace</p>
</div>
<a href='https://projects.barcelonacodeschool.com/soul-food/' target='_blank' rel="noopener noreferrer">
<img src={Soulfood} alt='Soulfood, home-cookedmarketplace coded by Magda Freitas' />
</a>
<h4>Coded by Anna Chew → <a href='http://annachew.surge.sh' target='_blank' rel="noopener noreferrer">Portfolio page</a>
</h4>
</section>





<section className='project'>
<div>
<h1><a href='https://ckelly.tv' target='_blank' rel="noopener noreferrer">Zolzar</a></h1>
<p>The interstellar game</p>
</div>
<a href='https://ckelly.tv' target='_blank' rel="noopener noreferrer">
<img src={Zolzar} alt='Zolzar, the interstellar game' />
</a>
<h4>Design/coded by Chris Kelly → <a href='https://ckelly.tv' target='_blank' rel="noopener noreferrer">Portfolio page</a>
</h4>
</section>

<section className='project'>
<div>
<h1><a href='https://www.bretthalperin.com/cccb.html' target='_blank' rel="noopener noreferrer">CCCB</a></h1>
<p>Audio guide app for visitors</p>
</div>
<a href='https://www.bretthalperin.com/cccb.html' target='_blank' rel="noopener noreferrer">
<img src={CCCB} alt='CCCB, Audio guide app for visitors' />
</a>
<h4>UX Design by Brett Halperin → <a href='https://www.bretthalperin.com/index.html' target='_blank' rel="noopener noreferrer">Portfolio page</a>
</h4>
</section>


<section className='project'>
<div>
<h1><a href='https://projects.barcelonacodeschool.com/luciana-commerce/' target='_blank' rel="noopener noreferrer">Blanchette</a></h1>
<p>Fashion online store</p>
</div>
<a href='https://projects.barcelonacodeschool.com/luciana-commerce/' target='_blank' rel="noopener noreferrer">
<img src={Blanchette} alt='Style Ship eCommerce web store'/></a>
<h4>Coded by Luciana Müller and Juliana Moribe
</h4>
</section>

<section className='project'>
<div>
<h1><a href='https://projects.barcelonacodeschool.com/pandora-commerce/' target='_blank' rel="noopener noreferrer">Latin American Bookstore</a></h1>
<p>Online bookstore</p>
</div>
<a href='https://projects.barcelonacodeschool.com/pandora-commerce/' target='_blank' rel="noopener noreferrer">
<img src={LAB} alt='Style Ship eCommerce web store'/></a>
<h4>Coded by Pandor Jane →  <a href='http://pandorajk.surge.sh' target='_blank' rel="noopener noreferrer">Portfolio page</a>
</h4>
</section>

</Grid>
</div>
);
}
