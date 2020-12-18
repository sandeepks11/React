import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import axios from 'axios';
import  * as FcIcons from "react-icons/fc";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import University2 from './Datatable2'

import {Button, Modal,Form} from 'react-bootstrap';
import University from './University';
import * as yup from 'yup';
import { string } from 'yup/lib/locale';

// import { hot } from 'react-hot-loader/root';


class Admission extends Component {

    constructor(props) {
    super(props)
    
    this.state = {
  
         show2:false,
         Show:false,

         admissionValue:[],
         getData:[],
         datas: [],
         dist:[],
         admission:[],
        
         key:'',
         sname:'',
         cutoff:'',
         address:'',
         university:'',
         states:'',

         snameError:'',
         cutoffError:'',
         addressError:'',
         universityError:'',
         stateError:'',
       
        
    }
  
}



    componentDidMount() 
   {
    
       axios.get('http://universities.hipolabs.com/search?country=India')
       .then(respond => {this.setState({datas:respond.data})}); 

       axios.get('https://api.covid19india.org/state_district_wise.json')
      .then(respond => {this.setState({dist:respond.data})}); 
        
      var get=JSON.parse(localStorage.getItem('admission'));
      if(get===null)
      {

      localStorage.setItem('admission',JSON.stringify([]));

      }

       this.getData=JSON.parse(localStorage.getItem('admission'))
        // console.log(this.getData);
   
       this.setState({getData:JSON.parse(localStorage.getItem('admission'))});
        // console.log(this.state.getData)

       $(document).ready(function () {
            $('#example').DataTable();
        });


   }




   formGet=(e)=>
   {
    
       this.setState({[e.target.name]:e.target.value})
   }

   handlemodal()
   {
    

    this.setState({show2:false})
    this.setState({show:!this.state.show})
    this.setState({sname:''})
    this.setState({address:''})
    this.setState({cutoff:''})
    this.setState({university:''})
    this.setState({states:''})

    this.setState({snameError:''})
    this.setState({addressError:''})
    this.setState({cutoffError:''})
    this.setState({universityError:''})
    this.setState({stateError:''})
   
   }



   handlemodal2=(key,no,name,address,cutoff,university,state)=>
   {

       this.setState({show2:!this.state.show})
       this.setState({show:!this.state.show})
       this.setState({show2:true})

       this.setState({key:key})
       this.setState({no:no})
       this.setState({sname:name})
       this.setState({address:address})
       this.setState({cutoff:cutoff})
       this.setState({university:university})
       this.setState({states:state})
 
   }



validate=()=>
{
    let isError=false;
    const errors={

         snameError:'',
         cutoffError:'',
         addressError:'',
         universityError:'',
         stateError:'',

    };

//this.state.sname.match(/[_\W0-9]/)

    if(this.state.sname=='')
    {
        isError=true;
        errors.snameError="Please provide a Name"
    }
    else   if(!isNaN(this.state.sname) || (!this.state.sname.match(/^[a-zA-Z  .]*$/)))
    {
        isError=true;
        errors.snameError="Please enter only alphabets"
    }

    if(this.state.address=='')
    {
        isError=true;
        errors.addressError="Please provide Address"
    }
    else   if(this.state.address.match(/[_\W]/))
    {
        isError=true;
        errors.addressError="Please enter a valid address"
    }

    if(this.state.cutoff=='')
    {
        isError=true;
        errors.cutoffError="Please provide CutOff Mark"
    }
    else  if(this.state.cutoff > 100  )
    {
        isError=true;
        errors.cutoffError="Cutoff should be less than or equall to 100"
    }
    else if(this.state.cutoff <10)
    {
        isError=true;
        errors.cutoffError="Cutoff should be greater than or equall to 10"
    }

    if(this.state.university=='')
    {
        isError=true;
        errors.universityError="Please select a University Name"
    }

    if(this.state.states=='')
    {
        isError=true;
        errors.stateError="Please select  a State Name"
    }

   
        this.setState({
            ...this.state,
            ...errors
        });
    
    
    return isError;

}



register=(e)=>
   {

      e.preventDefault();
      const err=this.validate();
         

     if(!err)
       {
    
       var datas={ 
    
        sname:this.state.sname,
        address:this.state.address,
        cutoff:this.state.cutoff,
        university:this.state.university,
        states:this.state.states,
        
        };

        this.setState({show:!this.state.show})
   
        var get=JSON.parse(localStorage.getItem('admission'));

        if(get===null)
        {

        localStorage.setItem('admission',JSON.stringify(datas));

        }

        else
        {

            get.push(datas);
            localStorage.setItem('admission',JSON.stringify(get));
            alert('Registered Successfully')
            window.location.reload();

        }   
    } 

        

   }



   update=(e)=>
   {
       
         e.preventDefault();

         const err=this.validate();
         
         

         if(!err)
           {
        
        var datas={
           
            
            sname:this.state.sname,
            address:this.state.address,
            cutoff:this.state.cutoff,
            university:this.state.university,
            states:this.state.states,
       
            };

            let k=this.state.key;
           
            this.setState({show:!this.state.show})
        

            let admissionValue=JSON.parse(localStorage.getItem('admission'));
            admissionValue.splice(k,1,datas)
            localStorage.setItem('admission',JSON.stringify(admissionValue))
            alert('Updated successfully')
            window.location.reload();


   }
}


   deleteAdmission=(event,k)=>
   {

        if(!window.confirm("Are you sure to delete this?"))
        {return;}
       
        let admissionValue=JSON.parse(localStorage.getItem('admission'));
        admissionValue.splice(k,1)
        this.setState({admission:admissionValue});
        localStorage.setItem('admission',JSON.stringify(admissionValue))
        alert('Deleted Successfully')
        window.location.reload();
   }

   getUnique(arr,comp)
   {
     const unique=arr.map(e=>e[comp])
     .map((e,i,final)=>final.indexOf(e)===i && i)
     .filter(e=>arr[e])
     .map(e=>arr[e]);
 
     return unique;
   }

      render(){

        var selectedIndex=-1;
        let i=0;
        let keys=Object.keys(this.state.dist)

        const UniqueState=this.getUnique(this.state.datas,"state-province")


      return (

          <div className="admission"><br></br>
          <div className="container"><br></br>
          <center><h3 id="h3">Admission Details</h3></center> <br></br>
          <center><Button onClick={()=>this.handlemodal()} className="primary">NEW ADMISSION </Button></center>  
           
              <table id="example" className="display"> 
                <thead>
                    <tr>
                       
                        <th>Sl_no </th>
                        <th style={{display:'none'}}>key</th>
                        <th>Student Name</th>
                        <th>Student Cutoff</th>
                        <th>Student Address</th>
                        <th>University</th>
                        <th>State</th>
                        <th>Action</th>
                  
                    </tr>
                </thead>
                <tbody>
                    
    
                {this.state.getData.map((item,k)=>{
                    

                       return(
                         
                           <tr>
                               
                               <td>{i=i+1}</td>
                               <td style={{display:'none'}}>{k}</td>
                               <td>{item.sname}</td>
                               <td>{item.cutoff}</td>
                               <td>{item.address}</td>
                               <td>{item.university}</td>
                               <td>{item.states}</td>
                    
                             
                                <td>   
                 
                                &nbsp;&nbsp;&nbsp;   
                                <AiIcons.AiFillEdit onClick={()=>this.handlemodal2(k,item.no,item.sname,item.address,item.cutoff,item.university,item.states)} />
                               &nbsp;&nbsp; &nbsp;&nbsp;    
                              <FcIcons.FcFullTrash  data-key={k} onClick={()=>this.deleteAdmission(item,k)} />
                               
                               </td>

                           </tr>
                       )
                   })}

                </tbody>

            </table>
              
            </div>

            <Modal show={this.state.show} onHide={()=>this.handlemodal()}>
            {!this.state.show2 ?
            <Modal.Header closeButton>ADMISSION FORM</Modal.Header>:
            <Modal.Header closeButton> EDIT ADMISSION FORM</Modal.Header>}
            <Modal.Body>

            <Form>

            <Form.Control type="hide" style={{display:'none'}} value={this.state.key} name="key"   required />
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Student Name</Form.Label>
                <Form.Control type="text" value={this.state.sname} name="sname" onChange={this.formGet} placeholder="Student Name"  required />
                <div id="error">{this.state.snameError}</div>
            </Form.Group>
               
            <Form.Group controlId="formBasicAddress">
                <Form.Label>Student Address</Form.Label>
                <Form.Control type="text" value={this.state.address} name="address" onChange={this.formGet} placeholder="Student Address" required />
               <div id="error">{this.state.addressError}</div> 
            </Form.Group>

            <Form.Group controlId="formBasicAddress">
                <Form.Label>Student CutOff</Form.Label>
                <Form.Control type="number"  value={this.state.cutoff} name="cutoff"  onChange={this.formGet} placeholder="Student CutOff"  required />
               <div id="error">{this.state.cutoffError}</div>
            </Form.Group>
           
           <p>Select State</p>  
            <Form.Control as="select"  name="states" onChange={this.formGet} required>

              {!this.state.show2 ?
               <option >Select State</option>:
                <option  >{this.state.states}</option>}
               {UniqueState.map((item,k) => {

                if(item['state-province']!=null)
                {

                return (
                <option>{item['state-province']}</option>
                

                  )}})}
                 
            </Form.Control>
              <div id="error">{this.state.stateError}</div>
             <br></br>


             
           <p>Select University</p>
           <Form.Control as="select" name="university" onChange={this.formGet} required >

           {!this.state.show2 ?
           <option >Select University</option>:
           
           <option >{this.state.university}</option>  }


                 {this.state.datas.map((item,k) => {
                
                if(item['state-province']===this.state.states)
                {
                    return (

                    <option>{item.name}</option>

                    )}})}   
                  
            </Form.Control> 
            <div id="error">{this.state.universityError}</div>  <br></br> 
        
           {!this.state.show2 ?
           
           <Button   variant="primary" onClick={this.register} type="submit"> Submit </Button>:
           <Button   variant="primary" onClick={this.update} type="submit"> Update </Button>  }
           
            </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={()=>this.handlemodal()}>Close</Button>
            </Modal.Footer>


            </Modal>

            </div>
      );
    }
}

export default Admission

