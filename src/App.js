//1st import
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

//2nd Class Component
class App extends React.Component {
  render(){
    return(
      <>
      <Header/>
      <h2>Yo!</h2>
      <Main/>
      <Footer/>
      </>
    )
  }
}

// #rd Export the component so other files can import them 
export default App;