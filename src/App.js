import './App.css';
import PhotoTable from './components/PhotoTable';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>NAVA - Házi feladat</p>
        </div>
      </header>
      <main>
        <SearchBar />
        <PhotoTable />
      </main>
      <footer className="App-footer">
        <p>Készítette: Szigetvári Katalin</p>
      </footer>
    </div>
  );
}

export default App;
