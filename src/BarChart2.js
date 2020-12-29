import React from 'react';
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

function BarChart2() {

    const [chartData, setChartData] = useState({});
    const [states, setstates] = useState([]);
    // let states = [];

    const chart = () => {
     
      let data=[];
      let states = [];
      let unique=[];
      let number=[];
      let i=0;

    var get=JSON.parse(localStorage.getItem('admission'));
    console.log(get);

    axios
      .get("http://universities.hipolabs.com/search?country=India")
      .then(res => {data=res.data
        
        for (const dataObj of res.data) {
          if(dataObj['state-province']!==null)

          states.push((dataObj['state-province']));

          unique=states.map((e,i,final)=>final.indexOf(e)===i && i)
          .filter(e=>states[e])
          .map(e=>states[e]);
         
        }

      get.map((item,k)=>
      {
        
        if(item.states===unique[0])
        {
        console.log(item.states)
        console.log(unique)

          return (
            i=i+1
            
          )

          }
        
      }
      )
      number.push(i)

      i=0;
      get.map((item,k)=>
      {
        if(item.states===unique[1])
        {
         
          return (
           
            i=i+1
            
          )
        }
      }
      )
      number.push(i)

      i=0;
      get.map((item,k)=>
      {
        if(item.states===unique[2])
        {
          
          return (
            
            i=i+1
            
          )
        }
      }
      )
      number.push(i)
     
      i=0;
      get.map((item,k)=>
      {
        if(item.states===unique[3])
        {
         
          return (
            
            i=i+1
            
          )
        }
      }
      )
      number.push(i)
     
      i=0;
      get.map((item,k)=>
      {
        if(item.states===unique[4])
        {
         
          return (
          
            i=i+1
            
          )
        }
      }
      )
      number.push(i)
     
      i=0;
      get.map((item,k)=>
      {
        if(item.states===unique[5])
        {
        
          return (
            
            i=i+1
            
          )
        }
      }
      )
      number.push(i)
     
      i=0;
      get.map((item,k)=>
      {
        if(item.states===unique[6])
        {
          
          return (
            
            i=i+1
            
          )
        }
      }
      )
      number.push(i)
     
      i=0;
      get.map((item,k)=>
      {
        if(item.states===unique[7])
        {
          
          return (
          
            i=i+1
            
          )
        }
      }
      )
      number.push(i)
     
      i=0;
      get.map((item,k)=>
      {
        if(item.states===unique[8])
        {
          
          return (
            
            i=i+1
            
          )
        }
      }
      )
      number.push(i)

      i=0;
      get.map((item,k)=>
      {
        if(item.states===unique[9])
        {
          
          return (
            
            i=i+1
            
          )
        }
      }
      )
      number.push(i)
     
       
        setChartData({

          labels:unique ,
          datasets: [
            {
              label: "No. of Students",
              data:number,
              backgroundColor: ["rgba(75, 192, 192, 0.6)","rgba(75, 192, 192, 0.6)","rgba(75, 192, 192, 0.6)","rgba(75, 192, 192, 0.6)","rgba(75, 192, 192, 0.6)","rgba(75, 192, 192, 0.6)","rgba(75, 192, 192, 0.6)","rgba(75, 192, 192, 0.6)","rgba(75, 192, 192, 0.6)","rgba(75, 192, 192, 0.6)","rgba(75, 192, 192, 0.6)"],
              borderWidth:10
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

 
  useEffect(() => {
    
   chart();
   
  }, []);

    return (
        <div>
       
         <Bar
          data={chartData}
          options={{
            responsive: true,
            title: { text: "State with No. of Students", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit:10,
                    beginAtZero: true
                  },
                  gridBars: {
                    display: true
                  }
                }
              ],
              xAxes: [
                {
                  gridBars: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      
        </div>
    )
}

export default BarChart2;

