import './index.css';
import React, {Component} from 'react';
import CustomNum from "./components/CustomNum";
import Plus from './components/plus';
import Minus from './components/Minus';
import Reset from './components/reset';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          count: 0

      }
  }
 
  increment = () => {
      this.setState({ count: this.state.count + 1 });
  }

  decrement = () => {
      this.setState({ count: this.state.count - 1 });
  }
  
  reset = () => {
    this.setState({ count: 0});
  }

  inputNum = (number) =>{ 
    let value = parseInt(number)
    this.setState({count: this.state.count + value}
    )
  }
  
  render() {
      return (
          <div className="App">
            <div className="container" >
                 <h1 id='white-count'>Current number of people in store: {this.state.count}</h1>     
            </div>
            
            <div className="container" id="button-container">
                <Plus increment={this.increment} />
                <Minus decrement={this.decrement} />  
            </div> 
              
            {/* <div className="container" id="reset-button">
             
            </div> */}
                

                <Reset reset={this.reset}/>
                <div className="input"> 
            
        
                <CustomNum inputNum={this.inputNum}/>               
            </div>
            

          </div>
      );
  }
}


export default App;


          
        
  
      
     