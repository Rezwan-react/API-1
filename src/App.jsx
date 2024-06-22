
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'

import NotFound from './Pages/NotFound'
import Buy from './Pages/Buy'
import Data from './Pages/Data'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>}/> 
        <Route path='/data' element={<Data/>}/>
        <Route path='/buy' element={<Buy/>}/>
        <Route path='*'   element={<NotFound/>}/>
      </Route>
    )
  )

  return (
    <>
     <RouterProvider router={route}/>
    </>
  )
}

export default App
