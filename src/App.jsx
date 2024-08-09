import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./Pages/Home.jsx";
import Events from "./Pages/Events.jsx";
import Magazine from "./Pages/Magazine.jsx";
import SignUp from "./Pages/SignUp.jsx";
import NoPage from "./Pages/NoPage.jsx";
import { AnimatePresence } from "framer-motion";


const AppContent = () => {
  const location = useLocation();
  return (
    <Layout currentPath={location.pathname}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Magazine" element={<Magazine />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Layout>
  );
};

const App = () => {
  return (
    <Router>
      <AnimatePresence>
    
          <AppContent />
       
      </AnimatePresence>
    </Router>
  );
};

export default App;