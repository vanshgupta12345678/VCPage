import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards.js'
import Card2 from './Components/Card2.js';
import Card3 from './Components/Card3.js'
import Card4 from './Components/Card4.js'
// import Card4 from './Components/Card4.js';
// import Card2 from './Components/Card2.js'
function App() {
  return (
    <>    <Navbar />
      < Sidebar />
      <Cards />
      <Card2 />
      {/* <Card2/> */}
      <Card3 />

      <Card4 />
    </>
  );
}

export default App;
