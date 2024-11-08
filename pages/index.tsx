import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature title="Project Management" description="Manage your tasks effectively." buttonText="Get Started" />
      <Footer />
    </div>
  );
}
