import React from 'react';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
// import Main from './components/Main';
function App() {
  return (
    <div className="bg-black h-full text-red-700">
      <Navbar />
      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;
