import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';



function App () {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Page1/>} />
          <Route path='//politicas-Site-Comprei-Delivery' element={<Page2/>} />
          <Route path='/politicas-App-Comprei-Delivery' element={<Page3/>} />
          <Route path='/politicas-App-Ache-Entregas' element={<Page4/>} />
        </Routes>
      </BrowserRouter>
    
  )
}
export default App;
