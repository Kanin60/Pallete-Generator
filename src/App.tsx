import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from "./Layout/MainLayout";
import { MyPallettePage } from "./Pages/MyPallettePage";
import { StartSide } from "./Pages/StartSide";
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<StartSide />} />
        <Route path='/mypallettes' element={<MyPallettePage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
