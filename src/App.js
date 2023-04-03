import './Fonts.css'
import { AnimatePresence } from 'framer-motion';
import { Footer, Header, Landingscreen, Menu, About, Contact } from './components';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <AnimatePresence wait>
      <div className="App">
        <Header />
        <div className='main-app-container'>
         <Routes>
          <Route path="/*" element={<Landingscreen />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Aboutus" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
         </Routes>
        </div> 
        <Footer/>
      </div>
    </AnimatePresence>
  );
}

export default App;
