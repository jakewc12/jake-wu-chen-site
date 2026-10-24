import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom';

import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        {/* Old multi-page routes now live as sections on the home page. */}
        <Route path="info" element={<Navigate to="/#experience" replace />} />
        <Route path="projects" element={<Navigate to="/#projects" replace />} />
        <Route path="contact" element={<Navigate to="/#contact" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
