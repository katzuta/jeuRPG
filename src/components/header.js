import React from 'react';
import {render} from 'react-dom';

export class Header extends React.Component {

 constructor(props) {    
        super(props);
        this.state = {
            nom: ''
        };
    }
    
    handleName(event) {
        this.setState({nom: event.target.value});  
    }

  render() {
    return (
      <div>
        <label>nom: </label>
        <input type="text"onChange={this.handleName} />
      </div>
    );
  }
}
