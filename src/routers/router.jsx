import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../components/Home'
import Services from '../components/Services'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Qualifications from '../components/Qualifications'

const router = createBrowserRouter ([{
    path:"/",
    element: <App/>,
    children:[
        {
            path : "#home",
            element: <Home/>,
        },
        {
            path:"#services",
            element: <Services/>,
        },{
            path:"#about",
            element: <About/>,
        },{
            path :"#project",
            element: <Projects/>,
        },{
            path:"#contact",
            element:<Contact/>
        },{
            path:"#qualifications",
            element:<Qualifications/>
        }
    ]

}]) 

export default router