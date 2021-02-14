import React from 'react'
import './App.css';


class App extends React.Component {
    constructor(props) {
        super();
        
    }
    render() {
       return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    {/**Add searchResults component */}
                    <div className="App-playlist">
                        {/**Add a searchResults components */}
                        {/**Add a playlist component */}
                    </div>
                </div>
            </div>
        )
  }
}

export default App;