import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Screens/Login/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
