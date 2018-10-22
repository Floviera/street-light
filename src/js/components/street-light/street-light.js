import React from 'react';
import './street-light.css';
class TrafficLight extends React.Component {
  
  constructor () {
    super (); //letructor always needs a super
    this.state ={ // creating a default state for a soon as the page loads
      clickedLight: null 
    };
  }
  
  render(){
    console.log(this.state); 
    let redExtra = '';       //== is a question
         if(this.state.clickedLight === 'redLight') redExtra = 'selected'; 
    let yellowExtra = ''; 
         if(this.state.clickedLight === 'yellowLight') yellowExtra = 'selected'; 
    let greenExtra = ''; 
         if(this.state.clickedLight === 'greenLight') greenExtra = 'selected'; 

    
    
    return (<div>
        <div id="container">
            <div id="greenLight"  className = {"greenLight" + ' ' + greenExtra} onClick={() => this.setState({ clickedLight: 'greenLight'})}></div>
            <div id= "yellowLight" className = {"yellowLight" + ' '  + yellowExtra} onClick={() => this.setState({ clickedLight: 'yellowLight'})}></div>
            <div id ="redLight" className =  {"redLight" + ' ' + redExtra} onClick={() => this.setState({ clickedLight: 'redLight'})}></div>
        </div>
    </div>);
    
}
}  


export default TrafficLight;





















 /* letructor(){
    super();
    this.state = {
      whoIsGlowing: '',
      lights: ['green', 'yellow', 'red']
      
    };
  }
  
  convertLightIntoHTMLElement(color,i){
      let glowingClass = (this.state.whoIsGlowing === color) ? 'glow' : '';
      
      return (<div key={i} id="red" className={color + ' ' + glowingClass} onClick={() => this.setState({whoIsGlowing: color})}></div>);
  }
   
   
  render() {
    console.log("I have rendered");

    let lightAsHTML = this.state.lights.map((light,i) => this.convertLightIntoHTMLElement(light,i));
    
    return (
      <div className="trafficLight">
        {lightAsHTML}
      </div>
    );
  }
}*/