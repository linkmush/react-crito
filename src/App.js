import './App.css';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import Header from './components/Header';
import MemberSection from './components/MemberSection';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
       <FeatureSection />
       <MemberSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
