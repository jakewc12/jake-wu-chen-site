import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Info from './pages/Info';
import { muiTheme } from './theme';
import Footer from './components/Footer';
import 'flowbite/dist/flowbite.css';
import 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'yet-another-react-lightbox/styles.css';

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="info" element={<Info />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
      </Router>
    </MuiThemeProvider>
  );
};


export default App;
