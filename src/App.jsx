import "./App.css";
import Header from './Components/Header.jsx'
import {Intro} from './Components/Intro.jsx' //we used curly braces because Intro.js used rafc function which uses export const instead of export default which is a named export
//if we used export default in Intro.js, we would import it without curly braces
import {Cards} from './Components/Cards.jsx'
import {AboutMe} from './Components/AboutMe.jsx'
import {Projects} from './Components/Projects.jsx'
import {Certificates} from './Components/Certificates.jsx'
import {Skills} from './Components/Skills.jsx'
import {Contact} from './Components/Contact.jsx'

function App() {
  return (
    <>
      <Header  searchBar = {false}/> {/* Here we are passing the title and searchBar prop to the Header component */}
      <Intro/>
      <Cards/>
      <AboutMe/>
      <Certificates/>
      <Projects/>
      <Skills/>
      <Contact/>

    </>
  );
}

export default App;
