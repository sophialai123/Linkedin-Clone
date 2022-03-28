import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";


function App() {
  return (

    <Router>

      <Routes>

        <Route exact path="/" element={<Login />} />

        {/* Render multiple components in one Route */}

        <Route path='/Home' element={
          <div>
            <Header />
            <Home />
          </div>
        } />

      </Routes>
    </Router>

  );
}

export default App;
