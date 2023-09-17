import './App.css'
import Dashboard from './pages/Dashboardpage/Dashboard'
import Landing from './pages/LandingPage/Landing'
import {Routes , Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Landing/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App