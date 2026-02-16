import './App.css'
import 'remixicon/fonts/remixicon.css';
import { Header } from './components/Header';
import {Hero}  from './components/Hero/Hero';
import About  from './components/About';
import Technology from './components/Technology';
import {Work}  from './components/Work';
import {Experience} from "./components/Experience";
import SocialMedia from './components/SocailMedia';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {


  return (
    <>
      <Header/>
      {/* <SpaceShip/> */}
      <Hero/>
      <About/>
      <Technology/>
      <Experience/>
      <Work/>
      <SocialMedia/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
