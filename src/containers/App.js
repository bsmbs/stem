import React, { Component } from 'react';

import '../assets/css/App.css';
import Szczegoly from '../components/App/Szczegoly'
import Menu from '../components/App/Menu'
// #include <js>
import { remote } from 'electron';


class App extends Component {
  constructor(props) {
    var inputprops = [];
    super(props);

    this.state = {
      eee: null,
      wybrany: null,
      divStyle: null,
      active: null,
      biblioteka: false,
      ustawienia: false,
      tryb: 0,
      trybPaska: 0,
      bibliotekaToggled: 0,
    }
    this.toggleVis = this.toggleVis.bind(this);
    this.odswiez = this.odswiez.bind(this);
  }
  

  componentDidMount() {
    fetch('https://papryka.pro/stemd', {mode: 'cors'})
      .then(response => response.json())
      .then(data => this.setState({ eee: data.stem }));
  }
  odswiez() {
    fetch('https://papryka.pro/stemd', {mode: 'cors'})
      .then(response => response.json())
      .then(data => this.setState({ eee: data.stem }));
  }

  toggle(position) {
    if(this.state.active === position) {
      this.setState({active: null})
    } else {
      this.setState({active: position})
    }
  }
  myColor(position) {
    if (this.state.active === position) {
      return "#154c87";
    }
    return "";
  }
  wybrany() {
    that.setState({
      wybrany: ee,
    })
  }
  toggleVis() {
    setTimeout(() => {
      this.setState({ biblioteka: true, })
    }, 100)
    
  }
  lubie() {
    if (this.state.bibliotekaToggled == 1) {
      this.setState({bibliotekaToggled: 0})
      this.biblioTeka.style.display = 'none';
      setTimeout(() => { this.biblioTeka.style.left = -1000 }, 50)
    } else {
      this.biblioTeka.style.transition = '500ms';
      this.biblioTeka.style.display = 'block';
      setTimeout(() => { this.biblioTeka.style.left = 0 }, 50)
      this.setState({bibliotekaToggled: 1})
    }
    console.log('log');
  }
  render() {
    const { eee } = this.state;
    
    return (
      <div className="ctct">
      <Menu />

      <div className="container">
        <div className="sidebar">
          {this.state.trybPaska == 0 && <span onClick={this.lubie.bind(this)} className="welcomx">Biblioteka Stema</span> }
          
          <div ref={(divv) => { this.biblioTeka = divv; }} className="biblioteka">
          {eee ? (
          eee.map(ee =>
          <div style={{background: this.myColor(ee.id)}} className="gry" onClick={() => { this.setState({ wybrany: ee, tryb: 1 }); this.toggle(ee.id)} } key="{ee.id}">
            <span className="nazwa">{ee.name}</span>
          </div>
          )
        ) : 
          setInterval(() => {
            this.odswiez()
          }, 500)
         }
         </div>
         
          <span className="welcomx">Inne</span>
          <div className="gry" style={{background: this.myColor(1488)}} onClick={() => { this.setState({ tryb: 2 }); this.toggle(1488)}}>O Stem</div>
          <div className="gry" style={{background: this.myColor(1489)}} onClick={() => { this.setState({ tryb: 3 }); this.toggle(1489)}}>Stemit</div>
          <span className="elo" style={{position: 'absolute', bottom: 0}}>Stem v1.0</span>
          </div>
        <Szczegoly tryb={this.state.tryb} data={this.state.wybrany}/>
      </div>

      </div>
    );
  }
}


export default App;
