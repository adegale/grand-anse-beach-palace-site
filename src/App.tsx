import Header from './components/Header';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Story from './components/Story';
import ExploreGrenada from './components/ExploreGrenada';
import Testimonials from './components/Testimonials';
import Amenities from './components/Amenities';
import SecurityDeposit from './components/SecurityDeposit';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-white text-palace-navy">
      <Header />
      <Hero />
      <Rooms />
      <Story />
      <ExploreGrenada />
      <Testimonials />
      <Amenities />
      <SecurityDeposit />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
