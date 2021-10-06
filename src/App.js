import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

function Body() {
  return (
    <main>
      <h1>Company Name</h1>
      <section></section>
    </main>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
