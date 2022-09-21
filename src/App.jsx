import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { CartDesign } from './Pages/CartDesign'

function App() {
  const initialValue = {
    name:'',email:'',password:''
  }
  const [userData,setUserData] = useState(JSON.parse(localStorage.getItem('user')) || initialValue)

  return (
    <div className="App">
      <Navbar user={userData}/>
      <CartDesign userData={userData} setUserData={setUserData}/>
    </div>
  )
}

export default App
