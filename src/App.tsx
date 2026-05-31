import Header from './components/Header';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Story from './components/Story';
import ExploreGrenada from './components/ExploreGrenada';
import Testimonials from './components/Testimonials';
import Amenities from './components/Amenities';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ghost-white text-dark-text">
      <Header />
      <Hero />
      <Rooms />
      <Story />
      <ExploreGrenada />
      <Testimonials />
      <Amenities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
