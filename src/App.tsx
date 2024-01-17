import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from "./Layout/MainLayout";
import { MyPallettePage } from "./Pages/MyPallettePage";
import { StartSide } from "./Pages/StartSide";
import './App.css'
import { ThemeProvider } from './Layout/ThemeContext';

function App() {


  return (
    <BrowserRouter>
      <ThemeProvider>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<StartSide />} />
        <Route path='/mypallettes' element={<MyPallettePage/>}/>
      </Route>
    </Routes>
      </ThemeProvider>
  </BrowserRouter>
  )
}

export default App
