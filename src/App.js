
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import RequireAuth from './Pages/Auth/RequireAuth/RequireAuth';
import Blog from './Pages/Blog/Blog';
import CheckOut from './Pages/Home/Home/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Servises from './Pages/Home/Servises/Servises';

import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ServiseDetils from './Pages/ServiseDetils/ServiseDetils';
import Footer from './Pages/Shared/Footer/Footer';

import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/servise/:serviseId" element={<ServiseDetils></ServiseDetils>}></Route>
        <Route path="/servises" element={
          <RequireAuth>
            <Servises></Servises>
          </RequireAuth>
        }></Route>
        <Route path="/checkout/" element={<CheckOut></CheckOut>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>


        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
