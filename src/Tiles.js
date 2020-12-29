import React, { Component } from 'react'
import { FaCentercode } from 'react-icons/fa';
import Countup from 'react-countup';
import axios from 'axios';
import img1 from "./IMAGES/university4.jpg";

import {CardGroup,Card,CardDeck,ListGroupItem,ListGroup} from 'react-bootstrap';
import CountUp from 'react-countup';


class Tiles extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
            datas:[],
            getData:[]

        }
    }
    
    componentDidMount() 
   {
    
    axios.get('http://universities.hipolabs.com/search?country=India')
    .then(respond=>{this.setState({datas:respond.data})}); 

    this.setState({getData:JSON.parse(localStorage.getItem('admission'))});

   }

    render() {

        let i=0;
        let n=0;

        return(
        
            <div className="admission"><br></br> <br></br>
        
                {this.state.datas.map((item,k)=>{{i=i+1}})}
              {this.state.getData.map((item,k)=>{{n=n+1}})}

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title style={{color:'#1ebae6',align:'center'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No.of Universities <CountUp end={i} duration={5}/></Card.Title>
                <Card.Title style={{color:'#1ebae6',align:'center'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No.of Admissions &nbsp;&nbsp;&nbsp;&nbsp;<CountUp end={n} duration={10}/></Card.Title>
                <Card.Text>
                </Card.Text>
                <Card.Link href="Universities">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Universities</Card.Link>
                <Card.Link href="Admissions"> Admissions</Card.Link>
              </Card.Body>
            </Card>
            </div>

        
            
                )
            }
}

export default Tiles


