mport React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      gambar:'',
      alt:'',
    }
  }
  generate(){
    var alt = this.refs.img.value;
    var random = Math.floor(Math.random() * 4) + 1;
    var url = `https://robohash.org/${alt}?set=set${random}`;

    this.setState({gambar:url})
  }
  render() {
    return (
      <div className="container">
        <div className="form-group">
          <br/><br/>
          <input ref='img' className="form-control rounded mr-auto ml-auto" type="text" placeholder="Say anything"/>
          <br/><br/>
          <button onClick={()=>{this.generate()}} className="btn btn-success"> got it! </button>
        </div>
        <div><img src={this.state.gambar} alt={this.img}/></div>
      </div>
    );
  }
}

export default App;