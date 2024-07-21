import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import { Home } from './pages/home.jsx';
import { Navbar } from './components/navbar';
import { Community } from './pages/community';
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Community' element={<Community/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
