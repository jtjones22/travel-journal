import React from "react";
import './style.css'
import NavBar from './components/NavBar'
import Posts from './components/Posts'
import data from './data'

export default function App() {
    
    const locations = data.map(item => {
        return <Posts key={item.id} item={item}/> 
    })

    return (
        <div>
            <NavBar />
            <div className="posts--container">
                {locations}
            </div>
        </div>
    )
}