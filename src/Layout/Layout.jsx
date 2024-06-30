// component-layouts
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className="min-h-[1300px]">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
