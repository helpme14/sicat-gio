
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/AvatarProf';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import ParticlesBack from './components/ParticlesBack';
import Aboutme from './components/Aboutme';
import Footer from './components/Footer';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import HomePage from './components/Navbar';
// import CertificatesPage from './components/Certificates';


function App() {
  return (
  <div className="">

    <Navbar  />
    <Hero />
    <ParticlesBack /> 
    <Certificates  />
    <Projects/>
    <Aboutme/>
    <Footer />
     
  </div>
  );
}

export default App;
