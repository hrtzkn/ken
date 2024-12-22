import { Router, Routes, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';

const customHistory = createBrowserHistory();

function AppRouter() {
  const [location, setLocation] = useState(customHistory.location);

  useEffect(() => {
    const unlisten = customHistory.listen(({ location }) => {
      setLocation(location);
    });
    return () => unlisten();
  }, []);

  return (
    <Router location={location} navigator={customHistory}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRouter;
