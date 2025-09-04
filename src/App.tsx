import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import MainField from './components/MainField/MainField';
import './App.css';
import axios from 'axios';

axios.defaults.baseURL = 'https://codelang.vercel.app/api';

function App() {
  
  return (
    <>
      <Header />
      <div className="mainInterfaceWrapper">
        <SideMenu />
        <MainField />
      </div>
    </>
  )
}

export default App;
