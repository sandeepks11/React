import React from 'react';
import './App.css';
import University from './University';
import Tiles from './Tiles';
 import BarChart from './BarChart';
import BarChart2 from './BarChart2';


function Home() {
  return (
     
     <React.Fragment>

      <div className="home" >    
      <Tiles/>
      </div> 
      
      <div className="chart" >
      <BarChart/>
      </div>

     <br></br><br></br><br></br><br></br>
     
      <div className="charts" >
      <BarChart2/>
      </div>

      </React.Fragment>
 
 
 );

}

export default Home;



