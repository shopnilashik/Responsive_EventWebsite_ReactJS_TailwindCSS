
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Home from './Components/Home/Home';
import { SliderData } from './Components/Banner/SliderData';
import Footer from './Components/Footer/Footer';
import Body from './Components/Body/Body';
import Menubar from './Components/Menubar/Menubar';
import Gallery from './Components/Gallery/Gallery';
import Services from './Components/Services/Services';



function App() {
  return (
    <div className="App">
          <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/footer' element={<Body />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/services' element={<Services/>} />
        <Route path='/menu' element={<Menubar />} />
       
        <Route path='/banner' element={<Banner slides={ SliderData }/>} />
        
      </Routes>
    </div>
  );
}

export default App;
