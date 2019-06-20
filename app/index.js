import React from 'react'
import ReactDOM from 'react-dom'
import Popular from './component/Popular'
import Battle from './component/Battle'
import './index.css'


class App extends React.Component{
    render(){
        return (
            <div className='container'>
                <Battle />
            </div>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById('app')
)