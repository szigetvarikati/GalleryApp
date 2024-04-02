import './App.css';
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
      <footer className="App-footer">
        <p>Készítette: Szigetvári Katalin</p>
      </footer>
    </div>
  );
}

export default App;
