import React, { Component } from 'react';
import { Line } from "react-chartjs-2";
import axios from "axios";

 class Chart extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            datas:[],
            chartData:{},
            // employeeSalary:[],
            // employeeAge:[],
            stateNames:[],
            
            


        }
    }
    
componentDidMount()
{
    
  
    axios.get("http://universities.hipolabs.com/search?country=India")
    .then(res =>{this.setState({datas:res.data});

      this.setState({chartData:{

      // labels:this.state.datas.map((item)=>item['state-province']),
      labels:this.state.datas,

        datasets: [
          {
            label: "level of thiccness",
            data:[0,1,2,3,4,5,6,7,8,9,10],
            backgroundColor: ["rgba(75, 192, 192, 0.6)"],
            borderWidth: 4
          }
        ]
    }
      });
    })
    .catch(err => {
      console.log(err);
    });
//   console.log(empSal, empAge);
};


    render() {
        // this.setChartData();
        return (
            <div>
                <div className="App">
      <h1>Dankmemes</h1>
      <div>
        <Line
          data={this.state.chartData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
            </div>
        )
    }
}

export default Chart
