import HomePage from './pages/Homepage';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './Navbar';
import Footer from './Footer';
import Privacy from './pages/Privacy';
import NotFoundPage from './pages/Notfoundpage';

import {
	BrowserRouter,
  Routes,
	Route
} from 'react-router-dom';

const cssStyle={
  main:{
    width: "100%"
  }
}

function App() {
  return (
    <html style={cssStyle.main}>
      
    <BrowserRouter>
    <NavBar />
  <Routes>
    <Route path="/" element={<HomePage/>} exact />
    <Route path="/Privacy" element={<Privacy/>} exact />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
  <Footer />
</BrowserRouter>
</html>
  );
}

export default App;
