import React from 'react';
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

function BarChart() {

    const [chartData, setChartData] = useState({});
    const [states, setstates] = useState([]);
    // let states = [];

    const chart = () => {
     
      let data=[];
      let states = [];
      let unique=[];
      let number=[];
      let i=0;

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

      data.map((item,k)=>
      {
        if(item['state-province']===unique[0])
        {
          console.log(item['state-province'])
          return (
            i=i+1
            
          )

         
        }
      }
      )
      number.push(i)

      i=0;
      data.map((item,k)=>
      {
        if(item['state-province']===unique[1])
        {
          console.log(item['state-province'])
          return (
           
            i=i+1
            
          )
        }
      }
      )
      number.push(i)

      i=0;
      data.map((item,k)=>
      {
        if(item['state-province']===unique[2])
        {
          console.log(item['state-province'])
          console.log(unique[2])
          return (
            
            i=i+1
            
          )
        }
      }
      )
      number.push(i)
     
      i=0;
      data.map((item,k)=>
      {
        if(item['state-province']===unique[3])
        {
          console.log(item['state-province'])
          return (
            
            i=i+1
            
          )
        }
      }
      )
      number.push(i)
     
      i=0;
      data.map((item,k)=>
      {
        if(item['state-province']===unique[4])
        {
          console.log(item['state-province'])
          return (
          
            i=i+1
            
          )
        }
      }
      )
      number.push(i)
     
      i=0;
      data.map((item,k)=>
      {
        if(item['state-province']===unique[5])
        {
          console.log(item['state-province'])
          return (
            
            i=i+1
            
          )
        }
      }
      )
      number.push(i)
     
      i=0;
      data.map((item,k)=>
      {
        if(item['state-province']===unique[6])
        {
          console.log(item['state-province'])
          return (
            
            i=i+1
            
          )
        }
      }
      )
      number.push(i)
     
      i=0;
      data.map((item,k)=>
      {
        if(item['state-province']===unique[7])
        {
          console.log(item['state-province'])
          return (
          
            i=i+1
            
          )
        }
      }
      )
      number.push(i)
     
      i=0;
      data.map((item,k)=>
      {
        if(item['state-province']===unique[8])
        {
          console.log(item['state-province'])
          return (
            
            i=i+1
            
          )
        }
      }
      )
      number.push(i)

      i=0;
      data.map((item,k)=>
      {
        if(item['state-province']===unique[9])
        {
          console.log(item['state-province'])
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
              label: "No. of universities",
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
            title: { text: "State with No. of Universities", display: true },
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

export default BarChart;

