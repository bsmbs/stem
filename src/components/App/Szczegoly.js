import React, { Component } from 'react';

// var Carousel = require('nuka-carousel');
import { shell } from 'electron';
import os from 'os';
var zagraj = 'Zagraj!';

class Szczegoly extends Component {

constructor(props) {
  super(props);

  this.state = {
    kupa: 'https://papryka.pro/stemit',
    wersja: '0.2.1',
    active: 3001,
  }
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
  } else {
    return "#5824ab";
  }
  return "";
}
render() {
  const przycisk = {}
  if (this.props.tryb == 0) {
  return (
    <div className="szczegoly">
      <div className="details" style={{textAlign: 'center'}}>
        <h1>Witaj w Stem!</h1>
        <p>Wybierz grę lub program na menu z lewej strony aby dowiedzieć się o niej więcej</p>
        <p>Jeżeli chcesz, aby twoja gra także się tu znalazła, napisz do mnie (Pizza)</p>
      </div>
    </div>
  )
  } else if (this.props.tryb == 1 && this.props.data) {
    if (os.platform() == 'linux') {
      if(this.props.data.dl.linux) {
        var zagraj = 'Zagraj';
        var link = this.props.data.dl.linux;
        przycisk.backgroundColor = '#db4307';
      } else {
        var zagraj = 'Niedostępne'
        przycisk.backgroundColor = '#323232';
        var link = '';
      }
    } else if (os.platform() == 'win32') {
      if(this.props.data.dl.windows) {
        var zagraj = 'Zagraj';
        var link = this.props.data.dl.windows;
        przycisk.backgroundColor = '#db4307';
      } else {
        var zagraj = 'Niedostępne'
        var link = '';
        przycisk.backgroundColor = '#323232';
      }
    }
 return (
  <div className="szczegoly">
  { this.props.data.img &&
      <img src={this.props.data.img} />
  }
    
    <div className="details">
    <p><span className="tytul" style={{textAlign: 'center'}}>{this.props.data.name}</span></p>
    <p className="ops">Autor: {this.props.data.autor}</p>
    <p className="ops">Język: {this.props.data.lang}</p>
    <p className="ops">Rozmiar: {this.props.data.rozmiar}</p>
    <p className="ops">Wersja: {this.props.data.wersja}</p>
    <p className="ops"></p>
    <p dangerouslySetInnerHTML={{__html: this.props.data.opis.replace(/\n/g, '<br />')}}></p>
    </div>
    <div className="smenu">
      <button className="nbtn" style={przycisk} onClick={() => shell.openExternal(link)}>{zagraj}</button>
      {this.props.data.strona &&
      <button className="nbtn strona" onClick={() => shell.openExternal(this.props.data.strona)}>Więcej</button>
      }
      {this.props.data.dl.source && 
      <button className="nbtn source" onClick={() => shell.openExternal(this.props.data.dl.source)}>Source</button>
      }
      {this.props.data.dl.skan &&
      <button className="nbtn skan" onClick={() => shell.openExternal(this.props.data.dl.skan)}>Skan</button>
      }
    </div>
  </div>
  
);
  }
else if (this.props.tryb == 2) {
    let zasieg = null;
    return(
      <div className="details">
        <h1>O Stem</h1>
        <h3>Problem?</h3>
        <b>Nie widzisz listy gier?</b><br /><span>Stem odświeża ją co chwilę automatycznie. Sprawdź czy masz połączenie z internetem.</span><br />
        <b>Gra nie działa?</b><br /><span>Napisz do jej autora.</span><br />
        <h3>Informacje o Stem</h3>
        <p>Wersja {this.state.wersja}</p>
        <p>Autor: Pizza</p>
      </div>
    )
  } else if (this.props.tryb == 3) {
    // style={{background: this.myColor(1488)}} onClick={() => { this.setState({ tryb: 2 }); this.toggle(1488)}}
    return (
      <div className="webview">
      <button className="nbtn stemit" style={{background: this.myColor(3001)}} onClick={() => { this.setState({kupa: 'https://papryka.pro/stemit'}); this.toggle(3001)}}>Stemit</button>
      <button className="nbtn stemit" style={{background: this.myColor(3002)}} onClick={() => { this.setState({kupa: 'https://papryka.pro/stemit/czat'}); this.toggle(3002)}}>Czat</button>
      <button className="nbtn stemit" style={{background: this.myColor(3003)}} onClick={() => { this.setState({kupa: 'https://papryka.pro/alle'}); this.toggle(3003)} }>Kup nowe gry na Alletanio</button>
      <webview is nodeintegration onLoad={() => this.openDevTools()} className="webview" src={this.state.kupa} />
      </div>
    )
  }
  
  }
}
export default Szczegoly;