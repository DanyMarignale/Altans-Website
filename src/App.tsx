import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DroitSocial } from './components/DroitSocial';
import { DroitAffaires } from './components/DroitAffaires';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';



export default function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Hero />
        <DroitSocial />
        <DroitAffaires />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

