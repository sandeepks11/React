import React, { Component } from 'react';
import axios from 'axios';

import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery'; 

 class University2 extends Component {

                constructor(props) {
                    super(props)

                    this.state = {
                        
                        datas:[],  
                        

                    }
}

componentDidMount() 
{

     axios.get('http://universities.hipolabs.com/search?country=India')
    .then(respond=>{this.setState({datas:respond.data})}); 

    $(document).ready(function () {
        $('#example').DataTable();
    });
   
}


    render() {
       
     let i=0;

      return (
          
        <div className="university">
        <div className="container"><br></br>
           <center><h3 id="h3">Universities</h3></center> <br></br>
    
          <table id="example" className="display"> 
              <thead>
                  <tr>
                  <th>#</th>
                  <th>University name</th>
                  <th>State</th>
                  <th>Country</th>
                  <th>Web Page</th>
                  <th>Domains</th>
                  </tr>
              </thead >
                  <tbody>
                      
                      {this.state.datas.map((item,k)=>{
                          return(
                          
                         <tr>
                          <td>{i=i+1}</td>
                          <td>{item['name']}</td>
                          <td>{item['state-province']}</td>
                          <td>{item['country']}</td>
                          <td>{item['web_pages']}</td>
                          <td>{item['domains']}</td>
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
export default University2