
import './App.css';
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import { SakkList } from './SakkList'
import { SakkSingle } from './SakkSingle';
import { SakkCreate } from './SakkCreate';
import { SakkMod } from './SakkMod';
import { SakkDelete } from './SakkDelete';

function App() {
  return (
    <div>
    <Router>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
           <NavLink to={`/`} className="nav-link">
              <span className="nav-link">Sakk Bejegyzések</span>
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={`/uj-sakk`} className="nav-link">
              <span className="nav-link">Új bejegyzés</span>
              </NavLink>
            </li>
          </ul>
        </div>
        </nav>
      <Routes>
        <Route path="/" element={<SakkList />} />
        <Route path="/sakkok/:sakkId" element={<SakkSingle />} />
        <Route path="/uj-sakk" element={<SakkCreate />} />
        <Route path="/mod-sakk/:sakkId" element={<SakkMod />} />
        <Route path="/del-sakk/:sakkId" element={<SakkDelete />} />
      </Routes>
    </Router>
        </div>
  );
}

export default App;
