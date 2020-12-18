import React from 'react';
import './App.css';
import University from './University';
import Tiles from './Tiles';

// import Chart from './Chart';
import BarChart from './BarChart';
// import Stock from './Stock';
// import Tiles from './Tiles';
// import Chart2 from './Chart2'

function Home() {
  return (
     
     <React.Fragment>
    <div className="home" >
         
      <Tiles/>
      </div> 
      
      <div className="chart" >
      <BarChart/>
      </div>
      </React.Fragment>
 
 
 );

}

export default Home;



