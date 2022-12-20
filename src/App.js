import React from "react";
import "./styles.css";
import { Grid } from "./containers/Grid";
// import RoB from './pics/reign_of_blood.jpg'
import YourWeather from './pics/josh_weather.png'
import Esperanza from './pics/esperanca_screen.jpg'
import Bookworld from './pics/bookworld_anders.jpg'
import Magda from './pics/magda-ecommerce.jpg'
import Soulfood from './pics/soulfood.jpg'
// import Claro from './pics/claro_lucy_ux.jpg'
// import Zolzar from './pics/zolzar.jpg'
import CCCB from './pics/cccb_brett.jpg'
import StyleShip from './pics/styleship.jpg'
import Subsala from './pics/subsala.jpg'
import LAB from './pics/pandora_ecommerce.jpg'
// import Ting from './pics/ting.jpg'
import Sara from './pics/sara.jpg'
import Charles from './pics/charles.jpg'
import Turtle from './pics/turtle.jpg'
import Weatherjokes from './pics/Weatherjokes.jpg'
import Rechargenow from './pics/rechargenow.jpg'
import Swapp from './pics/swapp.jpg'
// import Bake from './pics/bake.jpg'
import PB from './pics/pantry_buddy.jpg'
import Corona from './pics/michele_corona.png'
import ComplexApp from './pics/complex-app.png'
import BEACTIV from './pics/beaktiv.jpg'
import treatyoself from './pics/treatyoself.png'
import nebulosity from './pics/nebulosity.jpg'
import Gervie from './pics/gervie.png'
import Gabriella from './pics/gabriella.png'
import RainbowBeetroot from './pics/rainbow-beetroot.jpg'
import VietnamTours from './pics/vietnamtours.png'
import Neumorphism from './pics/Neumorphism.png'
import TommyEcommerce from './pics/tommy-commerce.jpg'
import NutritionTracker from './pics/nutrition-and-calories-tracker.jpg'
import BoringWeather from './pics/boring-weather.jpg'
import Billiesbeer from './pics/projects-barcelonacodeschool-billies-beer.jpg'
import BrewIt from './pics/brewit.jpg'
import FindJob from './pics/findjob.jpg'
import theGallows from './pics/the_gallows.jpg'
import oneOfUs from './pics/one_of_us.jpg'
import Yield from './pics/yield.jpg'
import huisjein from './pics/huisjein.jpg'
import walk_n_talk from './pics/walk_n_talk.jpg'
import winemind from './pics/winemind.jpg'
import useItUp from './pics/useitup.jpg'
import plateo from './pics/plateo.jpg'
import treviso from './pics/treviso.jpg'
import moviex from './pics/moviexdb-netlify-app.jpg'
import buddiez from './pics/buddiez.jpg'
import vinatt from './pics/vinatt.jpg'



export default function App() {
  return (
    <div className="App">
    <h1 onClick={()=>window.location.href='https://barcelonacodeschool.com'}>Barcelona Code School</h1>
    <h2>Alumni projects showcase</h2>
    <hr/>

    <Grid className={'grid'} columns="3" gap='2em'>

    <section className='project'>
    <div>
    <h1><a href='https://projects.barcelonacodeschool.com/buddiez' target='_blank' rel="noopener noreferrer">Buddiez</a></h1>
    <p>A social media for pets</p>
    </div>
    <div className='imgBackground'>
    <a href='https://projects.barcelonacodeschool.com/buddiez' target='_blank' rel="noopener noreferrer">
    <img src={buddiez} alt="Buddiez" />
    </a>
    </div>
    <p>Coded by Leonardo Fumagali
    → <a href='https://www.linkedin.com/in/leonardo-fumagali/' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section> 

    <section className='project'>
    <div>
    <h1><a href='https://projects.barcelonacodeschool.com/vinatt' target='_blank' rel="noopener noreferrer">Vina T&T</a></h1>
    <p>eCommerce web app</p>
    </div>
    <div className='imgBackground'>
    <a href='https://projects.barcelonacodeschool.com/vinatt' target='_blank' rel="noopener noreferrer">
    <img src={vinatt} alt="Vina T&T eCommerce web app" />
    </a>
    </div>
    <p>Coded by Trang Do
    → <a href='https://www.linkedin.com/in/trang-do-thuy-183435141' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section> 

    
    <section className='project'>
    <div>
    <h1><a href='https://moviexdb.netlify.app' target='_blank' rel="noopener noreferrer">MovieX</a></h1>
    <p>A movies database app</p>
    </div>
    <div className='imgBackground'>
    <a href='https://moviexdb.netlify.app' target='_blank' rel="noopener noreferrer">
    <img src={moviex} alt="use it up" />
    </a>
    </div>
    <p>Coded by Ivan Zelinskyi
    → <a href='https://ivan-zelinskyi-portfolio.netlify.app/' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section> 


    <section className='project'>
    <div>
    <h1><a href='https://treviso.onrender.com' target='_blank' rel="noopener noreferrer">Treviso</a></h1>
    <p>An eCommerce web app</p>
    </div>
    <div className='imgBackground'>
    <a href='https://treviso.onrender.com' target='_blank' rel="noopener noreferrer">
    <img src={treviso} alt="use it up" />
    </a>
    </div>
    <p>Coded by Ivan Zelinskyi
    → <a href='https://ivan-zelinskyi-portfolio.netlify.app/' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section> 



    <section className='project'>
    <div>
    <h1><a href='https://apps.apple.com/us/app/use-it-up-a-recipe-database/id1636287829' target='_blank' rel="noopener noreferrer">Use It Up</a></h1>
    <p>A recipe database app</p>
    </div>
    <div className='imgBackground'>
    <a href='https://apps.apple.com/us/app/use-it-up-a-recipe-database/id1636287829' target='_blank' rel="noopener noreferrer">
    <img src={useItUp} alt="use it up" />
    </a>
    </div>
    <p>Coded by <a href='https://ross-mclean.surge.sh/' target='blank'>Ross McLean</a>
  {/*→ <a href='https://vincentvc.surge.sh/' target='_blank' rel="noopener noreferrer">Portfolio page</a>*/}
    </p>
    </section> 




    <section className='project'>
    <div>
    <h1><a href='https://winemind.onrender.com' target='_blank' rel="noopener noreferrer">Winemind</a></h1>
    <p>A wine marketplace for miltiple sellers and single admin team</p>
    </div>
    <div className='imgBackground'>
    <a href='https://winemind.onrender.com' target='_blank' rel="noopener noreferrer">
    <img src={winemind} alt="winemind" />
    </a>
    </div>
    <p>Coded by <a href='https://www.linkedin.com/in/alex-castro-vera/' target='blank'>Alex Castro</a> and <a href="https://www.linkedin.com/in/paweł-kornas/" target="blank">Paweł Kornas</a>
{/*→ <a href='https://vincentvc.surge.sh/' target='_blank' rel="noopener noreferrer">Portfolio page</a>*/}
    </p>
    </section> 



    <section className='project'>
    <div>
    <h1><a href='https://annas-portfolio-396303.webflow.io/work/project-2' target='_blank' rel="noopener noreferrer">Huisjein</a></h1>
    <p>A transparent rental service that saves people time and educates them on their legal rights as tenants</p>
    </div>
    <div className='imgBackground'>
    <a href='https://annas-portfolio-396303.webflow.io/work/project-2' target='_blank' rel="noopener noreferrer">
    <img src={huisjein} alt="Huisjein" />
    </a>
    </div>
    <p>Designed by <a href='https://annas-portfolio-396303.webflow.io/work/project-2' target='blank'>Anna Veerman</a>
{/*→ <a href='https://vincentvc.surge.sh/' target='_blank' rel="noopener noreferrer">Portfolio page</a>*/}
    </p>
    </section> 

    <section className='project'>
    <div>
    <h1><a href='https://plateo.onrender.com' target='_blank' rel="noopener noreferrer">Plateo</a></h1>
    <p>An eCommerce web app</p>
    </div>
    <div className='imgBackground'>
    <a href='https://plateo.onrender.com' target='_blank' rel="noopener noreferrer">
    <img src={plateo} alt="plateo" />
    </a>
    </div>
    <p>Coded by <a href='https://ross-mclean.surge.sh/' target='blank'>Ross McLean</a>
{/*→ <a href='https://vincentvc.surge.sh/' target='_blank' rel="noopener noreferrer">Portfolio page</a>*/}
    </p>
    </section> 

    <section className='project'>
    <div>
    <h1><a href='https://aoppeln.com/kopia-ausencias-presencias' target='_blank' rel="noopener noreferrer">Yield</a></h1>
    <p>An app which helps to reduce food waste</p>
    </div>
    <div className='imgBackground'>
    <a href='https://aoppeln.com/kopia-ausencias-presencias' target='_blank' rel="noopener noreferrer">
    <img src={Yield} alt="Yield" />
    </a>
    </div>
    <p>Designed by <a href='https://aoppeln.com/kopia-ausencias-presencias' target="blank">Agnieszka Oppeln-Bronikowska</a>
{/*→ <a href='https://vincentvc.surge.sh/' target='_blank' rel="noopener noreferrer">Portfolio page</a>*/}
    </p>
    </section> 


    <section className='project'>
    <div>
    <h1><a href='https://kieras-design-portfolio.webflow.io/work/project-2' target='_blank' rel="noopener noreferrer">Walk n' Talk</a></h1>
    <p>A mobile app that helps to decrease frictions which occur between dog owners</p>
    </div>
    <div className='imgBackground'>
    <a href='https://kieras-design-portfolio.webflow.io/work/project-2' target='_blank' rel="noopener noreferrer">
    <img src={walk_n_talk} alt="Walk n' Talk" />
    </a>
    </div>
    <p>Designed by <a href='https://kieras-design-portfolio.webflow.io/work/project-2' target='blank'>Kiera McCormack</a> 
{/*→ <a href='https://vincentvc.surge.sh/' target='_blank' rel="noopener noreferrer">Portfolio page</a>*/}
    </p>
    </section> 

    <section className='project'>
    <div>
    <h1><a href='https://annas-portfolio-396303.webflow.io/work/project-1' target='_blank' rel="noopener noreferrer">One of Us</a></h1>
    <p>An interactive real world treasure hunt app which allows players to unlock secret local spot and learn local culture</p>
    </div>
    <div className='imgBackground'>
    <a href='https://annas-portfolio-396303.webflow.io/work/project-1' target='_blank' rel="noopener noreferrer">
    <img src={oneOfUs} alt="One of us" />
    </a>
    </div>
    <p>Designed by <a href='https://aoppeln.com' target="blank">Agnieszka Oppeln-Bronikowska</a>, <a href='https://annas-portfolio-396303.webflow.io' target='blank'>Anna Veerman</a>, <a href='https://kieras-design-portfolio.webflow.io' target='blank'>Kiera McCormack</a> 
{/*→ <a href='https://vincentvc.surge.sh/' target='_blank' rel="noopener noreferrer">Portfolio page</a>*/}
    </p>
    </section> 

    <section className='project'>
    <div>
    <h1><a href='https://apps.apple.com/es/app/the-gallows/id1613918820?l=en' target='_blank' rel="noopener noreferrer">The Gallows</a></h1>
    <p>A classic word game app</p>
    </div>
    <div className='imgBackground'>
    <a href='https://apps.apple.com/es/app/the-gallows/id1613918820?l=en' target='_blank' rel="noopener noreferrer">
    <img src={theGallows} alt="Hangman game" />
    </a>
    </div>
    <p>Coded by Desirée Lagerquist 
{/*→ <a href='https://vincentvc.surge.sh/' target='_blank' rel="noopener noreferrer">Portfolio page</a>*/}
    </p>
    </section> 


    <section className='project'>
    <div>
    <h1><a href='https://brew-it.onrender.com' target='_blank' rel="noopener noreferrer">Brew it!</a></h1>
    <p>A home brewery app</p>
    </div>
    <div className='imgBackground'>
    <a href='https://brew-it.onrender.com' target='_blank' rel="noopener noreferrer">
    <img src={BrewIt} alt="A home brewery app" />
    </a>
    </div>
    <p>Coded by Vincent van Campen 
    → <a href='https://vincentvc.surge.sh/' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section> 

    <section className='project'>
    <div>
    <h1><a href='https://projects.barcelonacodeschool.com/billies-beer/' target='_blank' rel="noopener noreferrer">Billie's Beer</a></h1>
    <p>eCommerce app</p>
    </div>
    <div className='imgBackground'>
    <a href='https://projects.barcelonacodeschool.com/billies-beer/' target='_blank' rel="noopener noreferrer">
    <img src={Billiesbeer} alt="eCommerce app" />
    </a>
    </div>
    <p>Coded by Kristiaan Goethaert 
    → <a href='http://kristiaangh.com/' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section> 

    <section className='project'>
    <div>
    <h1>Boring Weather App</h1>
    <p><a href='https://apps.apple.com/us/app/boring-weather-app/id1600913706' target='_blank' rel="noopener noreferrer">iOS</a> / <a href='https://play.google.com/store/apps/details?id=com.barcelonacodeschool.boringweatherapp' target='_blank' rel="noopener noreferrer">Android</a> app</p>
    </div>
    <div className='imgBackground'>
    <img src={BoringWeather} alt="Boring Weather mobile app" />
    </div>
    <p>Coded by Albert Muñoz Serra 
{/*→ <a href='' target='_blank' rel="noopener noreferrer">Portfolio page</a>*/}
    </p>
    </section> 

    <section className='project'>
    <div>
    <h1><a href='https://job-board-jkf6.onrender.com' target='_blank' rel="noopener noreferrer">Find job</a></h1>
    <p>A job board web app</p>
    </div>
    <div className='imgBackground'>
    <a href='https://job-board-jkf6.onrender.com' target='_blank' rel="noopener noreferrer">
    <img src={FindJob} alt="A job board web app" />
    </a>
    </div>
    <p>Coded by Julián del Busto Planas
    </p>
    </section> 


    <section className='project'>
    <div>
    <h1>Nutrition and Calorie Tracker</h1>
    <p><a href='https://apps.apple.com/us/app/nutrition-and-calories-tracker/id1600937101' target='_blank' rel="noopener noreferrer">iOS</a> / <a href='https://play.google.com/store/apps/details?id=com.tommybullen.nutritiontracker' target='_blank' rel="noopener noreferrer">Android</a> app</p>
    </div>
    <div className='imgBackground'>
    <img src={NutritionTracker} alt="Nutrition and Calorie Tracker mobile app" />
    </div>
    <p>Coded by Tommy Bullen 
    → <a href='http://tommybullenportfolio.surge.sh' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section> 


    <section className='project'>
    <div>
    <h1><a href='https://projects.barcelonacodeschool.com/tommy/' target='_blank' rel="noopener noreferrer">Clothes eCommerce</a></h1>
    <p>eCommerce app</p>
    </div>
    <div className='imgBackground'>
    <a href='https://projects.barcelonacodeschool.com/tommy/' target='_blank' rel="noopener noreferrer">
    <img src={TommyEcommerce} alt="eCommerce app" />
    </a>
    </div>
    <p>Coded by Tommy Bullen 
    → <a href='http://tommybullenportfolio.surge.sh' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section> 

    <section className='project'>
    <div>
    <h1><a href='https://apps.apple.com/us/app/neumorphism-weather/id1580923671' target='_blank' rel="noopener noreferrer">Neumorphism weather</a></h1>
    <p>Weather app with a cute companionship advice</p>
    </div>
    <div className='imgBackground'>
    <a href='https://apps.apple.com/us/app/neumorphism-weather/id1580923671' target='_blank' rel="noopener noreferrer">
    <img src={Neumorphism} alt="Neumorphism weather: Weather app with a cute companionship advice" />
    </a>
    </div>
    <p>Coded by Yen Hoang 
    → <a href='https://yenhoang_portfolio.surge.sh' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section> 


    <section className='project'>
    <div>
    <h1><a href='https://projects.barcelonacodeschool.com/vietnam-tours/' target='_blank' rel="noopener noreferrer">N'bie in VietNam</a></h1>
    <p>A Travel Agency</p>
    </div>
    <div className='imgBackground'>
    <a href='https://projects.barcelonacodeschool.com/vietnam-tours/' target='_blank' rel="noopener noreferrer">
    <img src={VietnamTours} alt="N'bie in VietNam: Vietnamese Travel Agency" />
    </a>
    </div>
    <p>Coded by Yen Hoang 
    → <a href='https://yenhoang_portfolio.surge.sh' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section> 

    <section className='project'>
    <div>
    <h1><a href='https://projects.barcelonacodeschool.com/rainbow-beetroot/' target='_blank' rel="noopener noreferrer">Rainbow Beetroot</a></h1>
    <p>Weekly deliveries of groceries</p>
    </div>
    <div className='imgBackground'>
    <a href='https://projects.barcelonacodeschool.com/rainbow-beetroot/' target='_blank' rel="noopener noreferrer">
    <img src={RainbowBeetroot} alt="RainbowBeetroot: Weekly deliveries of groceries" />
    </a>
    </div>
    <p>Coded by Marcus Lindbloom → <a href='https://marcuslindbloom.surge.sh' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section> 

    <section className='project'>
    <div>

    <h1><a href='http://gerviebarczyk.com/' target='_blank' rel="noopener noreferrer">Personal portfolio</a></h1>
    <p>A graduate's portfolio</p>
    </div>
    <div className='imgBackground'>
    <a href='http://gerviebarczyk.com/' target='_blank' rel="noopener noreferrer">
    <img src={Gervie} alt="Hi, I'm Gervie. Nice to meet you.." />
    </a>
    </div>
    <p>Coded by Gervie Barczyk → <a href='http://gerviebarczyk.com/' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section> 


    <section className='project'>
    <div>
    <h1><a href='http://gabriellatavares.surge.sh' target='_blank' rel="noopener noreferrer">Personal portfolio</a></h1>
    <p>A graduate's portfolio</p>
    </div>
    <div className='imgBackground'>
    <a href='http://gabriellatavares.surge.sh' target='_blank' rel="noopener noreferrer">
    <img src={Gabriella} alt="Hi, I am Gabriella Tavares" />
    </a>
    </div>
    <p>Coded by Gabriella Tavares → <a href='http://gabriellatavares.surge.sh' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section> 

    <section className='project'>
    <div>
    <h1><a href='https://apps.apple.com/us/app/nebulosity/id1555467929' target='_blank' rel="noopener noreferrer">Nebulosity</a></h1>
    <p>Minimalistic weather native mobile app</p>
    </div>
    <div className='imgBackground'>
    <a href='https://apps.apple.com/us/app/nebulosity/id1555467929' target='_blank' rel="noopener noreferrer">
    <img src={nebulosity} alt='Minimalistic weather native mobile app' />
    </a>
    </div>
    <p>Coded by Carlos Planchart → <a href='https://cplan485.gitlab.io/portfolio-project/' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section> 

    <section className='project'>
    <div>
    <h1><a href='https://treatyoself.onrender.com' target='_blank' rel="noopener noreferrer">Treat Yo Self</a></h1>
    <p>eCommerce app</p>
    </div>
    <div className='imgBackground'>
    <a href='https://treatyoself.onrender.com' target='_blank' rel="noopener noreferrer">
    <img src={treatyoself} alt='Treat Yo Self eCommerce app' />
    </a>
    </div>
    <p>Coded by Gabriella Tavares → <a href='http://gabriellatavares.surge.sh' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section> 


    <section className='project'>
    <div>
    <h1><a href='https://beactive-tove-adamsson.surge.sh' target='_blank' rel="noopener noreferrer">BEACTIV</a></h1>
    <p>Find how to exercise for free in Barcelona</p>
    </div>
    <div className='imgBackground'>
    <a href='https://beactive-tove-adamsson.surge.sh' target='_blank' rel="noopener noreferrer">
    <img src={BEACTIV} alt='Find how to exercise for free in Barcelona' />
    </a>
    </div>
    <p>Coded by Tove Adamsson → <a href='https://gitlab.com/toveadam' target='_blank' rel="noopener noreferrer">GitLab</a>
    </p>
    </section> 

    <section className='project'>
    <div>
    <h1><a href='http://pantrybuddy.rocks' target='_blank' rel="noopener noreferrer">Pantry Buddy</a></h1>
    <p>Recipes suggestion based on the ingredients you have</p>
    </div>
    <div className='imgBackground'>
    <a href='http://pantrybuddy.rocks' target='_blank' rel="noopener noreferrer">
    <img src={PB} alt='Recipes suggestion based on the ingredients you have' />
    </a>
    </div>
    <p>Coded by Carlos Planchart → <a href='https://cplan485.gitlab.io/portfolio-project/' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section> 

    <section className='project'>
    <div>
    <h1><a href='http://michele-saladino-covid19-stats.surge.sh' target='_blank' rel="noopener noreferrer">Corona Virus Tracker</a></h1>
    <p>Global or per country statistics for the Covid-19 cases</p>
    </div>
    <div className='imgBackground'>
    <a href='http://michele-saladino-covid19-stats.surge.sh' target='_blank' rel="noopener noreferrer">
    <img src={Corona} alt='Global or per country statistics for the Covid-19 cases' />
    </a>
    </div>
    <p>Coded by Michele Saladino → <a href='https://github.com/mikis165' target='_blank' rel="noopener noreferrer">GitHub page</a>
    </p>
    </section> 

    <section className='project'>
    <div>
    <h1><a href='https://reactchat11.netlify.app' target='_blank' rel="noopener noreferrer">Complex App</a></h1>
    <p>Content publishing / chatting platform</p>
    </div>
    <div className='imgBackground'>
    <a href='https://reactchat11.netlify.app' target='_blank' rel="noopener noreferrer">
    <img src={ComplexApp} alt='Content publishing / chatting platform' />
    </a>
    </div>
    <p>Coded by Michele Saladino → <a href='https://github.com/mikis165' target='_blank' rel="noopener noreferrer">GitHub page</a>
    </p>
    </section> 

    <section className='project'>
    <div>
    <h1><a href='https://projects.barcelonacodeschool.com/andrew-swapp' target='_blank' rel="noopener noreferrer">Swapp</a></h1>
    <p>A free market to exchange products and services</p>
    </div>
    <div className='imgBackground'>
    <a href='https://projects.barcelonacodeschool.com/andrew-swapp' target='_blank' rel="noopener noreferrer">
    <img src={Swapp} alt='A matching application for users looking to exchange or swap an unused or unwanted item for something else.' />
    </a>
    </div>
    <p>Coded by Andrew Blair → <a href='http://andrewblairportfolio.surge.sh' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section>  

    <section className='project'>
    <div>
    <h1><a href='https://apps.apple.com/us/app/id1527735701' target='_blank' rel="noopener noreferrer">RechargeNow</a></h1>
    <p>EV charging points nearby you</p>
    </div>
    <div className='imgBackground'>
    <a href='https://apps.apple.com/us/app/id1527735701' target='_blank' rel="noopener noreferrer">
    <img src={Rechargenow} alt='ReachargeNow -- EV charging points nearby you -- coded by Andrew Blair' />
    </a>
    </div>
    <p>Coded by Andrew Blair → <a href='http://andrewblairportfolio.surge.sh' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section>


    <section className='project'>
    <div>
    <h1><a href='https://apps.apple.com/es/app/turtle-weather/id1514618438?l=en' target='_blank' rel="noopener noreferrer">Turtle Weather mobile app</a></h1>
    <p>Retro pixel weather app</p>
    </div>
    <div className='imgBackground'>
    <a href='https://apps.apple.com/es/app/turtle-weather/id1514618438?l=en' target='_blank' rel="noopener noreferrer">
    <img src={Turtle} alt='Retro pixel weather app coded by Anders Tobias Nicolaysen' />
    </a>
    </div>
    <p>By Anders Tobias Nicolaysen → <a href='http://witty-fiction.surge.sh/' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section>

    <section className='project'>
    <div>
    <h1><a href='https://projects.barcelonacodeschool.com/sara-game/' target='_blank' rel="noopener noreferrer">Multiplayer card game</a></h1>
    <p>Online game with in-app purchases</p>
    </div>
    <div className='imgBackground'>
    <a href='https://projects.barcelonacodeschool.com/sara-game/' target='_blank' rel="noopener noreferrer">
    <img src={Sara} alt='Multiplayer card game, Online game with in-app purchases coded by Sara Moya' />
    </a>
    </div>
    <p>Coded by Sara Moya → <a href='https://saramoya.gitlab.io/my-portfolio/' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section>


{/*  <section className='project'>
  <div>
  <h1><a href='https://www.lucyburrluck.com/claro' target='_blank' rel="noopener noreferrer">Claro</a></h1>
  <p>Minimising frustration in the office space</p>
  </div>
  <a href='https://www.lucyburrluck.com/claro' target='_blank' rel="noopener noreferrer">
  <img src={Claro} alt='Soulfood, home-cookedmarketplace coded by Magda Freitas' />
  </a>
  <p>UX Design by Lucy Burrluck → <a href='https://www.lucyburrluck.com' target='_blank' rel="noopener noreferrer">Portfolio page</a>
  </p>
</section>*/}

    <section className='project'>
    <div>
    <h1><a href='https://esperanza.onrender.com' target='_blank' rel="noopener noreferrer">Esperança</a></h1>
    <p>Volunteer community in Barcelona</p>
    </div>
    <div className='imgBackground'>
    <a href='https://esperanza.onrender.com' target='_blank' rel="noopener noreferrer">
    <img src={Esperanza} alt='Esperanza app coded by Daniel Dick' />
    </a>
    </div>
    <p>Coded by Daniel Dick → <a href='https://www.daniel-d.dev' target='_blank' rel="noopener noreferrer">Portfolio page</a></p>
    </section>

    <section className='project'>
    <div>
    <h1><a href='/book-world/' target='_blank' rel="noopener noreferrer">Bookworld</a></h1>
    <p>Online book store</p>
    </div>
    <div className='imgBackground'>
    <a href='https://projects.barcelonacodeschool.com/book-world/' target='_blank' rel="noopener noreferrer">
    <img src={Bookworld} alt='Bookworld online book store app coded by Anders Tobias Nicolaysen' />
    </a>
    </div>
    <p>By Anders Tobias Nicolaysen → <a href='http://witty-fiction.surge.sh/' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section>

    <section className='project'>
    <div>
    <h1><a href='https://projects.barcelonacodeschool.com/magda-commerce/' target='_blank' rel="noopener noreferrer">Online shop</a></h1>
    <p>eCommerce web project</p>
    </div>
    <div className='imgBackground'>
    <a href='https://projects.barcelonacodeschool.com/magda-commerce/' target='_blank' rel="noopener noreferrer">
    <img src={Magda} alt='Bookworld online book store app coded by Magda Freitas' />
    </a>
    </div>
    <p>Coded by Magda Freitas 
{/*  → <a href='https://www.daniel-d.dev' target='_blank' rel="noopener noreferrer">Portfolio page</a>*/}
    </p>
    </section>

    <section className='project'>
    <div>
    <h1><a href='https://apps.apple.com/es/app/weathernjokes/id1521831493?l=en' target='_blank' rel="noopener noreferrer">Weather'n'jokes</a></h1>
    <p>Cute weather app</p>
    </div>
    <div className='imgBackground'>
    <a href='https://apps.apple.com/es/app/weathernjokes/id1521831493?l=en' target='_blank' rel="noopener noreferrer">
    <img src={Weatherjokes} alt="Weather'n'jokes, cute weather app coded by Magda Freitas" />
    </a>
    </div>
    <p>Coded by Magda Freitas 
{/*  → <a href='https://www.daniel-d.dev' target='_blank' rel="noopener noreferrer">Portfolio page</a>*/}
    </p>
    </section>


    <section className='project'>
    <div>
    <h1><a href='https://projects.barcelonacodeschool.com/kim-commerce/' target='_blank' rel="noopener noreferrer">Style Ship</a></h1>
    <p>eCommerce web store</p>
    </div>
    <div className='imgBackground'>
    <a href='https://projects.barcelonacodeschool.com/kim-commerce/' target='_blank' rel="noopener noreferrer">
    <img src={StyleShip} alt='Style Ship eCommerce web store'/></a>
    </div>
    <p>Coded by Eunyoung Kim → <a href='https://barcelonacodeschool.com/files/cv/CV_EunyoungKim.pdf' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section>

{/*<section className='project'>
<div>
<h1>Reign of Blood</h1>
<p>Online game with in-app purchases</p>
</div>
<a href='http://188.166.47.105' target='_blank' rel="noopener noreferrer">
<img src={RoB} alt='Reign of Blood online game coded by Josh Arnott' />
</a>
<p>Coded by Josh Arnott → <a href='http://josharnott.surge.sh' target='_blank' rel="noopener noreferrer">Portfolio page</a></p>
</section>*/}


    <section className='project'>
    <div>
    <h1><a href='https://play.google.com/store/apps/details?id=your.weather.application&gl=ES' target='_blank' rel="noopener noreferrer">Your weather</a></h1>
    <p>Native mobile weather app</p>
    </div>
    <div className='imgBackground'>
    <a href='https://play.google.com/store/apps/details?id=your.weather.application&gl=ES' target='_blank' rel="noopener noreferrer">
    <img src={YourWeather} alt='Native mobile weather app coded by Josh Arnott' />
    </a>
    </div>
    <p>Coded by Josh Arnott → <a href='http://josharnott.surge.sh' target='_blank' rel="noopener noreferrer">Portfolio page</a></p>
    </section>

    <section className='project'>
    <div>
    <h1><a href='https://projects.barcelonacodeschool.com/soul-food/' target='_blank' rel="noopener noreferrer">Soulfood</a></h1>
    <p>Home-cooked food marketplace</p>
    </div>
    <div className='imgBackground'>
    <a href='https://projects.barcelonacodeschool.com/soul-food/' target='_blank' rel="noopener noreferrer">
    <img src={Soulfood} alt='Soulfood, home-cookedmarketplace coded by Anna Chew' />
    </a>
    </div>
    <p>Coded by Anna Chew → <a href='http://annachew.surge.sh' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section>





{/*<section className='project'>
<div>
<h1><a href='https://ckelly.tv' target='_blank' rel="noopener noreferrer">Zolzar</a></h1>
<p>The interstellar game</p>
</div>
<a href='https://ckelly.tv' target='_blank' rel="noopener noreferrer">
<img src={Zolzar} alt='Zolzar, the interstellar game' />
</a>
<p>Design/coded by Chris Kelly → <a href='https://ckelly.tv' target='_blank' rel="noopener noreferrer">Portfolio page</a>
</p>
</section>*/}

    <section className='project'>
    <div>
    <h1><a href='https://www.bretthalperin.com/cccb.html' target='_blank' rel="noopener noreferrer">CCCB</a></h1>
    <p>Audio guide app for visitors</p>
    </div>
    <div className='imgBackground'>
    <a href='https://vimeo.com/376875142' target='_blank' rel="noopener noreferrer">
    <img src={CCCB} alt='CCCB, Audio guide app for visitors' />
    </a>
    </div>
    <p>UX Design by Brett Halperin → <a href='https://www.bretthalperin.com/index.html' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section>



    <section className='project'>
    <div>
    <h1><a href='https://projects.barcelonacodeschool.com/pandora-commerce/' target='_blank' rel="noopener noreferrer">Latin American Bookstore</a></h1>
    <p>Online bookstore</p>
    </div>
    <div className='imgBackground'>
    <a href='https://projects.barcelonacodeschool.com/pandora-commerce/' target='_blank' rel="noopener noreferrer">
    <img src={LAB} alt='Style Ship eCommerce web store'/></a>
    </div>
    <p>Coded by Pandor Jane →  <a href='http://pandorajk.surge.sh' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section>

{/*<section className='project'>
<div>
<h1><a href='http://tingting.herokuapp.com' target='_blank' rel="noopener noreferrer">Listen to the flowers</a></h1>
<p>Online flowers shop</p>
</div>
<a href='http://tingting.herokuapp.com' target='_blank' rel="noopener noreferrer">
<img src={Ting} alt='Listen to the flowers, Online flowers shop' />
</a>
<p>Coded by Ting Liu</p>
</section>*/}

    <section className='project'>
    <div>
    <h1><a href='https://projects.barcelonacodeschool.com/the-charles-project/' target='_blank' rel="noopener noreferrer">The Charles project</a></h1>
    <p>Buying time with celebrities</p>
    </div>
    <div className='imgBackground'>
    <a href='https://projects.barcelonacodeschool.com/the-charles-project/' target='_blank' rel="noopener noreferrer">
    <img src={Charles} alt='The Charles project -- Buying time with celebrities' />
    </a>
    </div>
    <p>Coded by Colette Brouns</p>
    </section>

    <section className='project'>
    <div>
    <h1><a href='https://projects.barcelonacodeschool.com/sub-sala-jacob/' target='_blank' rel="noopener noreferrer">Subsala</a></h1>
    <p>Find a space to host your event!</p>
    </div>
    <div className='imgBackground'>
    <a href='https://projects.barcelonacodeschool.com/sub-sala-jacob/' target='_blank' rel="noopener noreferrer">
    <img src={Subsala} alt='SubSala: Find a space to host your event!'/></a>
    </div>
    <p>Coded by Jacob Whitt → <a href='https://jacobwhitt.netlify.app' target='_blank' rel="noopener noreferrer">Portfolio page</a>
    </p>
    </section>

    </Grid>
    </div>
    );
}
