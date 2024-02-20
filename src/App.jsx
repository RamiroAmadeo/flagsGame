import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ListContainer from './components/ListContainer'
import ItemContainer from './components/ItemContainer'
import NavBar from './components/NavBar'

function App() {

  return (
    <BrowserRouter>
    {/* <NavBar/> */}
      <Routes>
        <Route path='/' element={<ListContainer/>}/>
        <Route path='/info/:name' element={<ItemContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
