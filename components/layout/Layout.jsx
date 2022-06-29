import Footer from './Footer';
import Headtags from './Head';
import styles from './layout.module.css';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className={styles.structure}>
      <Headtags />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
