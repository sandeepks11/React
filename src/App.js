import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import Sidemenu from './Sidemenu';
import Home from './Home';
import University from './University';
import Admission from './Admission';
import DataTable from './Datatable';
import University2 from './Datatable2'


function App() {
  
  return (
  
  <Router>
    
    <Sidemenu />
    <Switch>
  
          <Route path='/' exact component= {Home} />
          <Route path='/Universities' component= {DataTable} /> 
          <Route path='/Admissions' component= {Admission} />
        
    </Switch>
  </Router>
  
  );
}

export default App;
