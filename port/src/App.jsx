import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Principal } from './screens/Principal';
import { Detalhes } from './screens/Detalhes';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="/detalhes/:id" element={<Detalhes/>}/>
      </Routes>
    </Router>
  )
}

export default App