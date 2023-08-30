import Header from './Header'
import Profil from '../assets/icone_profil.jpg'
import Base from './Base'
import Footer from './Footer'



function App() {
  return (
    <div>
        <Header>
        <h1 className='header-title'> 42 Trancendance</h1>
        <div>
          <img src={Profil} alt='profil' className='header-profil'></img>
          <h2 className='pseudo'>Skellax</h2>
        </div>      
      </Header>
        <Base />
      <Footer />     
    </div>
    
      
  );
}

export default App;
