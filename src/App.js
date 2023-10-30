import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { Outlet } from 'react-router-dom/dist';
import { Provider } from "react-redux";
import appStore from './common/appStore';

function App() {
  return (
   <Provider store={appStore}>
      <div className='font-poppins'>
        <Header/>
        <Outlet/>
      </div>
   </Provider> 
   
  );
}

export default App;
