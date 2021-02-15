import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Link} from 'react-router-dom'
import FrontEnd from './FrontEnd'
import Nodejs from './Nodejs'
import MeanStack from './MeanStack'
import FullStack from './FullStack'

function App(props){
    return (
        <BrowserRouter>
         <div className= "container">
             <h1> Admin Dashboard</h1>
             <Link to='/front-end' className="btn btn-link"> Front-End Developer</Link>
             <Link to='/nodejs'  className="btn btn-link"> Node.js Developer</Link>
             <Link to='/mean-stact'  className="btn btn-link"> MEAN Stack Developer</Link>
             <Link to='/full-stack'  className="btn btn-link"> Full Stack Developer</Link>

             <Route path='/front-end' component = {FrontEnd} />
             <Route path='/nodejs' component = {Nodejs} />
             <Route path='/mean-stact'  component = {MeanStack}  />
             <Route path='/full-stack'  component = {FullStack} />
         </div>
        </BrowserRouter>
    )
}
export default App