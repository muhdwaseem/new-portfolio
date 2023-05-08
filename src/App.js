
// import './App.css';
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import Contact from './routes/Contact';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
