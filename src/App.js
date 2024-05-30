import './App.css';
import Header from './Component/Header.jsx';
import Home from './Component/Home.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <body>
        <Home/>
      </body>
    </div>
  );
}

export default App;
