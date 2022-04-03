import Footer from './Footer.js';
import './App.css';
import Nav from './Nav .js';
import Header from './Header.js';
import Main from './Main.js';
import Aside from './Aside.js';

const App = () => {
  return (

    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
