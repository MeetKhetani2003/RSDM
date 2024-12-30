import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './page/AboutUs/About';
import Course from './page/Courses/Course';
import Home from './page/Home/Home';
import Placements from './page/Placements/Placements';
import Layout from './Components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/courses' element={<Course />} />
          <Route path='/placements' element={<Placements />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
