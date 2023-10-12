import HomePage from './pages/HomePage/HomePage_완성'
import './reset.css'
import './app.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from './components/ProductDetail/ProductDetail';
import TopNavBar from './components/Header/TopNavBar/TopNavBar';
import HomePagee from './pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <TopNavBar/>
      <HomePage />
      <Routes>
        <Route path="/home" element={<HomePagee />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
