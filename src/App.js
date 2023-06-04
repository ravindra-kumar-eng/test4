import {Routes,Route} from "react-router-dom";
import './App.css';
import Navbar from './Navbar';

import ProductList from './components/ProductList';
// import ProductComponent from './components/ProductComponent';
import ProductDetail from './components/ProductDetail';


function App() {
  
  return (
   <>   
      <Navbar />

      <Routes>
        <Route path="/" exact element={<ProductList/> } />
        <Route path="/product/:productId" exact element={<ProductDetail/>} />
        {/* <Route path="/product/list" exact element={<ProductComponent/>}  /> */}
      </Routes>
   
    </>
    


  );
}

export default App;
