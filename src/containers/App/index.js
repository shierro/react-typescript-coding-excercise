import './App.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Body() {
  return (
    <main className="bg-white">
      <h1 className="text-lg py-8">Add Challenge Name Here</h1>
      <section></section>
    </main>
  )
}

function App() {
  return (
    <div className="App min-h-screen justify-between flex flex-col bg-gray-100">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
