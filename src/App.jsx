import './App.css'
import Dashboard from './pages/Dashboardpage/Dashboard'
import Landing from './pages/LandingPage/Landing'
import Login from './pages/LoginPage/Login'
import {Routes , Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Landing/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path= "/login" element= {<Login/>} />
      </Routes>
    </>
  )
}

export default App