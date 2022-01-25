import GraphicsTest from './pages/graphics_test'
import Example from './pages/page_test'
import './App.css';
import LoadingButton from './pages/button';
import Test from './pages/test';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Test />
      <Routes>
        <Route path='/' exact />
      </Routes>
      </Router>
    </>
  );
}

export default App;
