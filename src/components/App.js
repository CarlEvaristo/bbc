import './App.css';
import Header from "./Header"
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home';
import News from '../pages/News';
import Sport from '../pages/Sport';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route path="/news" element={ <News/> } />
        <Route path="/sport" element={ <Sport/> } />
      </Routes>
    </div>
  );
}

export default App;
