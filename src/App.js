import React, {Component} from 'react';
import List from './List';
import m1 from './m1.jpeg';
import m2 from './m2.jpeg';
import './App.css';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      people: [],
    }
    this.getpeople = this.getpeople.bind(this);
  }

  getpeople(){
    return axios.get("https://swapi.co/api/films")
    .then((response) => {
      console.log(response.data.results);
      this.setState( { people: response.data.results } )
    })
  }

  componentDidMount(){
    this.getpeople()
  }

  render(){
    const {people} = this.state;
    return(
      <div className="addmargin">
        <header className="App-header">
          
        <Carousel>
        <Carousel.Item>
  <img src={m1} className="m1" alt="m1" />
    <Carousel.Caption>
      <h3>Star Wars: The Rise of Skywalker </h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img src={m2} className="m2" alt="m2" />
    <Carousel.Caption>
      <h3>Solo: A Star Wars Story </h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
        </header>
        
        <List people={people}/>
      </div>
    );
  }

}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//       </header>
//     </div>
//   );
// }

export default App;
