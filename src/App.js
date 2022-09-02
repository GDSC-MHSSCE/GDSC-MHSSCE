import Gdsc from './components/Gdsc';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import Footer from './components/Footer';
import Event from './components/Event';
import Community from './components/Community';

function App() {
  return (
    <div className="App font-google ">
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
