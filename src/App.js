import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComp from './Compoents/NavbarComp';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import RegisterScreen from './Screens/RegisterScreen'

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/register" element={<RegisterScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
