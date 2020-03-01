import React from 'react';
import Home from './pages/Home';
import Count from './pages/Count';
import CopyRightApp from './components/Hoc';
import './App.css';

interface Iprops{

}
interface Istate{
  count:number,
}
class App extends React.Component<Iprops,Istate> {
  constructor(props: Iprops) {
    super(props)
  
    this.state = {
      count:0,
    }
  }
  incrementCount = ()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  decrementCount = ()=>{
    this.setState({
      count:this.state.count-1
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Home title="中国加油"/>
          <Count 
            count={this.state.count}
            increment={this.incrementCount}
            decrement={this.decrementCount}
          />
          <CopyRightApp/>
        </header>
      </div>
    );
  }
}

export default App;
