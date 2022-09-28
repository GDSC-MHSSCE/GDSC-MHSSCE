import Gdsc from './components/Gdsc';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import Footer from './components/Footer';
import Event from './components/Event';
import Community from './components/Community';
import './App.css';

function App() {
  return (
    <div className="App font-google class-1 class-2 class-3 class-4">
      <Navbar />
      <main className="mx-auto justify-center items-center px-6 py-8 md:px-8 lg:px-12">
        <Hero />
        <Gdsc />
        <Community />
        <Event />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;
