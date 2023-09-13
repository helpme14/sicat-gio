
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/AvatarProf';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import ParticlesBack from './components/ParticlesBack';
import Aboutme from './components/Aboutme';
import Footer from './components/Footer';


function App() {
  // const [isChecked, setIsChecked] = useState(false);
  return (
  <div className="overflow-hidden ">

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
