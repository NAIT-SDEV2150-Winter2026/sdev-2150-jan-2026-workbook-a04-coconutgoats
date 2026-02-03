import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
import Results from './components/Results';

function App() {
  return (
    <div className="container mx-auto">
      <Header tagline="Find the right resources, right away" />
      <div className="flex flex-col md:flex-row gap-4">
        <Filters />
        <Results />
      </div>
    </div>
  );
}

export default App;
