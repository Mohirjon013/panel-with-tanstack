
import { useContext } from 'react'
import './App.css'
import { Context } from './context/AuthContext'
import DashboardRoutes from './routes/DashboardRoutes'
import LoginRoutes from './routes/LoginRoutes'

function App() {

  const {token} = useContext(Context)
  if(token){
    return <DashboardRoutes/>
  }
  else{
    return <LoginRoutes/>
  }
}

export default App
