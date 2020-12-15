import React from 'react';
import { Bar } from "react-chartjs-2";
import axios from "axios";

class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
    }
  }

  componentDidMount() {
    
    let stockChartXValuesFunction = [];
    axios.get("http://universities.hipolabs.com/search?country=India")
    .then(res => {

          for (const dataObj of res.data ){
            stockChartXValuesFunction.push(dataObj['state-province']);
           
          }

          this.setState({stockChartXValues: stockChartXValuesFunction});
       
        }
      )
    
  }

  render() {
    return (
      <div>
        <h1>Stock Market</h1>
        <Bar
          data={[
            {
              x: this.state.stockChartXValues,
              y: [0,1,2,3,4,5,6,7,8,9,10],
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 720, height: 440, title: 'A Fancy Plot'}}
        />
      </div>
    )
  }
}
export default Stock;