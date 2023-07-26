import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './component/Header';
import Home from "./component/Home";
import Candidates from "./component/Candidates";
import FeatureBackend from "./component/FeatureBackend";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="Candidates" element={<Candidates />} />
          
        </Route>
        <Route path="features" element={<FeatureBackend />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
