import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { Outlet } from 'react-router-dom/dist';
function App() {
  return (
   <div className='font-poppins'>
    <Header/>
    <Outlet/>
   </div>
  );
}

export default App;
