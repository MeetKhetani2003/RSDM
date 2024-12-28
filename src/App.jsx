import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Course from './page/Courses/Course';
import Home from './page/Home/Home';
import Layout from './Components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/courses' element={<Course />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
