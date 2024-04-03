import './App.css';
import Footer from './components/Footer';
import MyNavbar from './components/MyNavBar';
import PhotoTable from './components/PhotoTable';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      
        <PhotoTable />
    
      <Footer />
    </div>
  );
}

export default App;
