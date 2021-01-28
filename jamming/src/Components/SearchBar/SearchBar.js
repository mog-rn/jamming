import React from 'react'
import ReactDOM from 'react-dom'

export class SearchBar extends React.Component{
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    }
}

ReactDOM.render(<SearchBar />, document.getElementById('app'))