import React, { Component } from 'react';

<<<<<<< HEAD
import '../assets/css/App.css';
import Szczegoly from '../components/App/Szczegoly'
import Menu from '../components/App/Menu'
// #include <js>
import { remote } from 'electron';

=======
// components
import '../assets/css/App.scss';
import Szczegoly from '../components/App/Szczegoly';
import Menu from '../components/App/Menu';
// inne
import fs from 'fs';
// import 'ustawienia,json';
import { remote, shell } from 'electron';
import { setTimeout } from 'timers';
>>>>>>> nowe wydanie

export const czytajAkcent = function() {
  if(fs.existsSync('ustawienia.json')) {
    var akcent = fs.readFileSync('ustawienia.json', 'utf8');
    var akcentdrugi = JSON.parse(akcent);
    return akcentdrugi.akcent;
  } else {
    var obj = '{"akcent": "#01579B"}'
    var akcentjeden = fs.writeFileSync('ustawienia.json', obj);
    czytajAkcent();
  }
}
class App extends Component {
  constructor(props) {
    var inputprops = [];
    super(props);
<<<<<<< HEAD

=======
>>>>>>> nowe wydanie
    this.state = {
      eee: null,
      wybrany: null,
      divStyle: null,
<<<<<<< HEAD
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
  

=======
      active: 1487,
      biblioteka: false,
      ustawienia: false,
      tryb: 69,
      trybPaska: 0,
      bibliotekaToggled: 0,
      klikniety: 0,
      tworcy: false,
      akcent: '#333333',
    }
    this.toggleVis = this.toggleVis.bind(this);
    this.odswiez = this.odswiez.bind(this);
    // this.czytajAkcent = this.czytajAkcent.bind(this);
    this.myColor = this.myColor.bind(this);
  }
  componentWillMount() {
    czytajAkcent();
  }
>>>>>>> nowe wydanie
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
<<<<<<< HEAD
      return "#154c87";
=======
      // return "#01579B";
      return czytajAkcent();
>>>>>>> nowe wydanie
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
<<<<<<< HEAD
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
=======
      this.biblioTeka.style.transition = '200ms';
      this.biblioTeka.style.display = 'block';
      setTimeout(() => { this.biblioTeka.style.opacity = 1 }, 5)
  }
  lubieStema() {
      this.stemowo.style.transition = '200ms';
      this.stemowo.style.display = 'block';
      setTimeout(() => { this.stemowo.style.opacity = 1 }, 5)
>>>>>>> nowe wydanie
  }
  render() {
    const { eee } = this.state;
    
    return (
      <div className="ctct">
      <Menu />

      <div className="container">
        <div className="sidebar">
<<<<<<< HEAD
=======
          <div className="welcomx" style={{background: this.myColor(1487)}} onClick={() => { this.setState({ tryb: 69 }); this.toggle(1487)}}>Strona główna</div>
>>>>>>> nowe wydanie
          {this.state.trybPaska == 0 && <span onClick={this.lubie.bind(this)} className="welcomx">Biblioteka Stema</span> }
          
          <div ref={(divv) => { this.biblioTeka = divv; }} className="biblioteka">
          {eee ? (
          eee.map(ee =>
<<<<<<< HEAD
          <div style={{background: this.myColor(ee.id)}} className="gry" onClick={() => { this.setState({ wybrany: ee, tryb: 1 }); this.toggle(ee.id)} } key="{ee.id}">
=======
          <div style={{background: this.myColor(ee.id)}} className="gry" onClick={() => { this.setState({ wybrany: ee, tryb: 1, klikniety: true }); this.toggle(ee.id)} } key={ee.id}>
>>>>>>> nowe wydanie
            <span className="nazwa">{ee.name}</span>
          </div>
          )
        ) : 
          setInterval(() => {
            this.odswiez()
          }, 500)
         }
         </div>
<<<<<<< HEAD
         
          <span className="welcomx">Inne</span>
          <div className="gry" style={{background: this.myColor(1488)}} onClick={() => { this.setState({ tryb: 2 }); this.toggle(1488)}}>O Stem</div>
          <div className="gry" style={{background: this.myColor(1489)}} onClick={() => { this.setState({ tryb: 3 }); this.toggle(1489)}}>Stemit</div>
          <span className="elo" style={{position: 'absolute', bottom: 0}}>Stem v1.0</span>
          </div>
        <Szczegoly tryb={this.state.tryb} data={this.state.wybrany}/>
=======
          <div className="welcomx" style={{background: this.myColor(1490)}} onClick={() => { this.setState({ tryb: 3 }); this.toggle(1490)}}>Społeczność</div>
          <span className="welcomx" onClick={this.lubieStema.bind(this)}>Stem</span>
          <div className="stemowo" ref={(stemowo) => this.stemowo = (stemowo)}>
          <div className="gry" style={{background: this.myColor(1491)}} onClick={() => { this.setState({ tryb: 4 }); this.toggle(1491)}}>Stem OpenGL</div>
          <div className="gry" style={{background: this.myColor(1488)}} onClick={() => { this.setState({ tryb: 2 }); this.toggle(1488)}}>Informacje</div>
          </div>
          </div>
        <Szczegoly akcent={czytajAkcent()} klikniety={this.state.klikniety} tryb={this.state.tryb} data={this.state.wybrany}/>
>>>>>>> nowe wydanie
      </div>

      </div>
    );
  }
}


export default App;
