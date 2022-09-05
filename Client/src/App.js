import React from 'react' ;
import Header from "./Container/Header";
import Footer from "./Container/Footer";
import Info from "./Container/Info";
import Testimony from "./Container/Testimony";
import Sponser from "./Container/Sponser";


const App = () => {
  return (
    <div>
      <Header />
      <Sponser />
      <Info />
      <Testimony />
      <Footer />
    </div>
  )
}

export default App ;
