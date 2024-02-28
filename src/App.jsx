import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ListContainer from './components/ListContainer'
import ItemContainer from './components/ItemContainer'
import Game from './components/Game'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListContainer/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/info/:name' element={<ItemContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
