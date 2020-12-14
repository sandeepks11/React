import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import axios from 'axios';


class University extends Component {

    constructor(props) {
    super(props)

    this.state = {
         university:['null'],
         i:0
    }
}

    componentDidMount() 
   {

        axios.get("http://universities.hipolabs.com/search?country=India")
        .then(response=>{this.setState({university:response.data})})
        .catch(error=>{console.log(error)})


      
        $(document).ready(function () {
            $('#example').DataTable();
        });
   }

      render(){
      
      return (
          
          <div className="university">
          <div className="container"><br></br>
             <center><h3 id="h3">Universities</h3></center> <br></br>
              <table id="example" class="display">
                <thead>
                    <tr>
                       
                        <th>Name</th>
                        <th>Web pages</th>
                        <th>Domains</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                   {this.state.university.map((item,key)=>{

                   
                       return(
                           <tr>
                        
                               <td>{item.name}</td>
                               <td>{item.web_pages}</td>
                               <td>{item.domains}</td>
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

export default University

