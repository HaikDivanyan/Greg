import GraphicsComponent from './components/graphics_component'
import './App.css';
import Home from './pages/home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const displayHeight = 480;
  return (
    /*<><div>
      <GraphicsComponent height={displayHeight} />
    </div><>*/
    <>
        <Router>
          <Home />
          <Routes>
            <Route path='/' exact />
          </Routes>
        </Router>
      </>
  );
}

export default App;
