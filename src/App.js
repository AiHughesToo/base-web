import { Routes, Route } from 'react-router-dom';
import Home from './components/routes/home/home.component';
import Navigation from './components/routes/navigation/navigation.component';
import Login from './components/routes/login/login.component';


const Shop =() => {
  return <h1>Shop Page</h1>
};

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
      </Route>
      
    </Routes>
  );
}

export default App;
