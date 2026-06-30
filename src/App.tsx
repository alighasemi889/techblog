import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedArticles from './components/FeaturedArticles';
import Categories from './components/Categories';
import LatestArticles from './components/LatestArticles';
import Newsletter from './components/Newsletter';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        <Hero />
        <FeaturedArticles />
        <Categories />
        <LatestArticles />
        <Newsletter />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
