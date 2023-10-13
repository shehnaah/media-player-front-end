import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import Landingpage from './page/Landingpage';
import WatchHistory from './page/WatchHistory';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watch-history' element={ <WatchHistory/>}/>
 </Routes>
<Footer/>
    </>
  );
}

export default App;
