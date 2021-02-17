import React, {useEffect, useState} from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import FullPage from './FirstPage';

const View =()=>{
    return(
        <div className='App'>
            <Header />
            <FullPage />
            <section>
                middle section
            </section>
            <Footer />
        </div>
    )
}

const App=() => {
    const[isMobile, setMobile] = useState(
      window.matchMedia('(max-width:350px)').matches
    );
    useEffect(()=>{
      window.addEventListener('resize', ()=>{
          setMobile(window.matchMedia('(max-width:350px)').matches)
      })
    })
    return (
      <div className="App">
      {isMobile ? <div>your mobile is not compatible to access this website</div> : <View />}
      </div>
    );
  }
  
  export default App;