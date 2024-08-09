import PropTypes from 'prop-types';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
const Layout = ({ currentPath, children }) => {
    return (
      <div>
        <div className="flex flex-col min-h-screen">
          <Navbar currentPath={currentPath} />
          <main className="flex-grow container mx-auto p-4">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    );
  };
  
  Layout.propTypes = {
    currentPath: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
  
  export default Layout;
  