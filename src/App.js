// 1st import
import React from 'react';
import Header from "./Header";




// 2nd Class component 
class App extends React.Component{
  render(){
    return(
      <>
        <Header />
        <h1>Horned Beasts</h1>
        <h2>Hey!</h2>
      </>

    )
  }
}
  




// #rd Export the component so other files can import them 
export default App;