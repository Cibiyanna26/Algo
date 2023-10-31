import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { Outlet } from 'react-router-dom/dist';
import { Provider } from "react-redux";
import appStore from './common/appStore';
import userContext from './common/userContext';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {
  const [User,setUser] = useState('Cibiyanna');
  return (
   <Provider store={appStore}>
    <userContext.Provider value={{currentUser:User,setUser}}>
        <div className='font-poppins'>
          <Header/>
          <Outlet/>
          <Footer/>
        </div>
      </userContext.Provider>
   </Provider> 
   
  );
}

export default App;
