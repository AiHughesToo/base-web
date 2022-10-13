import { Routes, Route } from 'react-router-dom';
import Home from './components/routes/home/home.component';
import Navigation from './components/routes/navigation/navigation.component';
import Login from './components/routes/login/login.component';
import Account from './account/account.component';

const App = () => {
  return (
    
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
      </Route>
      
    </Routes>
    
  );
}

export default App;
