import React from 'react';

export class Onlyletters extends React.Component {
    constructor () {
       super();
       this.state = {value:''};
    }

    charallow(e)
    {
      this.setState({inputtxt:e.target.value.replace(/[^a-zA-Z0-9@]/ig,'')});
    }
    render()
    {
      return(
         <hr>
            <Input type="text" value={this.state.inputtxt} onChange={this.charallow.bind(this)} placeholder="Nombre del punto" />
         </hr>
      );
    }
}
  