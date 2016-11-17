import React from 'react'
import NavBar from './components/NavBar'
import Slider from './components/Slider'

class App extends React.Component {

    constructor() {
        super();

    }

    render() {

        return (
            <div>
              <NavBar />
              <Slider />
            </div>
        );
  }
}

export default App
