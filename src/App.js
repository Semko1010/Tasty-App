import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from './components/Search/Search';
// import ApiMeals from './json/ApiMeals'
// import ApiCategories from './json/ApiCategories';
// import { Meals } from './json/ApiMeals';
// Header and Footer
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"


// Pages
import Category from './components/Category/Category';
import GetId from "./components/SubCategory/GetId"
import GetId2 from "./components/Detail/GetId2"


function App() {
  return (
    <div className="App">
      {/* <ApiCategories />
      <ApiMeals /> */}
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Category />} />
          <Route path='/category/:id' element={<GetId />} />
          <Route path='/details/:id' element={<GetId2 />} />
          <Route path="/search/:query" element={<Search />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
