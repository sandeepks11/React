import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

import axios from 'axios';
class Datatable3 extends React.Component {
 
  constructor(props) {
    super(props)
      this.state = {
        datas: [],
        
       
      }}
  componentDidMount() {
      
        axios.get('http://universities.hipolabs.com/search?country=India')
        .then(respond => {this.setState({datas:respond.data})}); 
   
    $(document).ready(function () {
        $('#example').DataTable();
    });
 }
  render(){
  
  return (
    <div className="admission">
        <center><h3 id="h3">Universities</h3></center> <br></br>
      <div className="container">
          <table id="example" className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>name</th>
              <th>web_pages</th>
              <th>country</th>
            </tr>
          </thead>
          <tbody>
          {this.state.datas.map((item,k) => {
            return (
             
                 <tr>
                  <td>{item.name}</td>
                  <td>{item.web_pages}</td>
                  <td>{item.country}</td>
                </tr>
             
            )
          })}
           
            
          </tbody>
        </table>
          
        </div>
      </div>
  );
}
}
export default Datatable3
