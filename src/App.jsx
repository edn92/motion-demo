import './App.css'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import {Routes, Route} from 'react-router-dom';
import About from './Components/About/About';
import HomePage from './Components/HomePage/HomePage';
import CharactersPage from './Components/Characters/CharactersPage';

function App() {
  
  return (
    <>
      <div className='main-container'>
        <Header /> 
        <div className="main-content-container">
          <Routes>
            <Route path='Home' element={<HomePage />}/>
            <Route path='Characters' element={<CharactersPage />}/>
            <Route path='About' element={<About />}/>
            <Route path='*' element={<HomePage />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
