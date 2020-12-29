import React, { Component } from 'react'
import './App.css';
export class Posts extends Component {
    render() {

        let i=0;
        
        const { posts, loading } = this.props;

        if (loading) {
            return <p>Loading  data...Please wait...</p>
        }

        return (
            
           <table id="example" className="display"> 
              <thead>
                  <tr>
                  <th>#</th>
                  <th>University name</th>
                  <th>Web Page</th>
                  <th>Domains</th>
                  <th>State</th>
                  <th>Country</th>
                  </tr>
              </thead >
                  <tbody>
                      
                      {posts.map((item)=>{
                          return(
                          
                         <tr>
                          <td>{i=i+1}</td>
                          <td>{item['name']}</td>
                          <td>{item['web_pages']}</td>
                          <td>{item['domains']}</td>
                          <td>{item['state-province']}</td>
                          <td>{item['country']}</td>
                         </tr>

                          )

                      })}
                      

                  </tbody>
             
          </table>
            
        )
    }
}

export default Posts