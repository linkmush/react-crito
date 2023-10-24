import './App.css';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import Header from './components/Header';
import MemberSection from './components/MemberSection';
import OurServices from './components/OurServices';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
       <FeatureSection />
       <OurServices />
       <MemberSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
