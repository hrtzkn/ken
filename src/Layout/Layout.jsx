import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="pt-[120px] p-8">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
