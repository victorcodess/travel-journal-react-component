import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./Components/Navbar"
import Card from "./Components/Card"
import data from "./data"

export default function(App) {
    const mappedData = data.map(data =>
    {return (<Card 
             key = {data.id}
             {...data}
                />
               );
              })
    return (<div>
            <Navbar />
            {mappedData}
            </div>
        )
}