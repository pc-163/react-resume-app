import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './pages/menu';
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import image from './pages/pc.jpg';
import Resume from './pages/Resume'
import Contact from './pages/Contact'
function App() {
  return (
    <div className="App">
      <div class="col-md-12">
        <div class="row mx-0">
          <div class="col-md-2 px-0 position-relative">
          <div id='bg-left' className=''>
            <Menu image={image}/>
          </div>
          </div>
          <div class="col-md-10 px-0" id='bg-right'>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/about" element={<About image={image} />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
