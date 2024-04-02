import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PhotoTable from './components/PhotoTable';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SearchBar />
        <PhotoTable />
      </main>
      <Footer />
    </div>
  );
}

export default App;
