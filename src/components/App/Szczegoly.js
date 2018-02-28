import React, { Component } from 'react';
<<<<<<< HEAD

// var Carousel = require('nuka-carousel');
import { shell } from 'electron';
import os from 'os';
var zagraj = 'Zagraj!';

=======
import '../../assets/css/Szczegoly.scss'
import { Informacje } from './Informacje';
import { InfoGra } from './InfoGra';
import { StemGL } from './StemGL';
import { czytajAkcent } from '../../containers/App';
// var Carousel = require('nuka-carousel');
import { shell } from 'electron';
import os from 'os';
import fs from 'fs';
// import html from 'react-inner-html';
import * as DiscordRPC from 'discord-rpc';
import { setInterval, setTimeout } from 'timers';
var zagraj = 'Zagraj!';

const nowyAkcent = function(kolor) {
  switch(kolor) {
    case 0:
      var obj = '{"akcent": "#01579B"}'
      var akcentjeden = fs.writeFileSync('ustawienia.json', obj);
      console.log('czemu to sie robi');
      break;
    case 1:
      var obj = '{"akcent": "#B71C1C"}';
      var akcentjeden = fs.writeFileSync('ustawienia.json', obj);
      break;
    case 2:
      var obj = '{"akcent": "#ff4a00"}';
      var akcentjeden = fs.writeFileSync('ustawienia.json', obj);
      break;
    case 3:
      var colorek = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      var obj = `{"akcent": "${colorek}"}`;
      var akcentjeden = fs.writeFileSync('ustawienia.json', obj);
  }
}

>>>>>>> nowe wydanie
class Szczegoly extends Component {

constructor(props) {
  super(props);
<<<<<<< HEAD

=======
>>>>>>> nowe wydanie
  this.state = {
    kupa: 'https://papryka.pro/stemit',
    wersja: '0.2.1',
    active: 3001,
<<<<<<< HEAD
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
=======
    tryb: this.props.tryb,
    eee: null,
    klikniety: this.props.klikniety,
    zapisanes: -1,
    hasTriggered: false,
    koloryzowane: null,
  }
  setInterval( () => {
      this.setState({tryb: this.props.tryb});
  })
  console.log(this.props.akcent)
}
nowyKolor(kolor) {
  switch(kolor) {
    case 0:
      document.body.style.background = '#202225';
      this.setState({koloryzowane: null})
      break;
    case 1:
      document.body.style.background = '#0D47A1';
      this.setState({koloryzowane: 'Poczuj się jak w Titanicu.'});
      break;
    case 2:
      document.body.style.background = '#BF360C';
      this.setState({koloryzowane: 'ee papryka'});
      break;
    case 3:
        var colorek = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        this.setState({koloryzowane: `kulki są koloru ${colorek}`})
        document.body.style.background = colorek;
        break;
    case 4:
      document.body.style.background = 'url("https://i.imgur.com/7KODqGd.jpg")';
      this.setState({koloryzowane: 'Xiaomi lepsze'})
      break;
    case 66:
      document.body.style.background = 'url("http://4.bp.blogspot.com/-g8l_rVY7a58/UVghl5x0hHI/AAAAAAAAB2Q/fSjsyWmipqY/s1600/Wielkanoc-61.jpg")';
      this.setState({koloryzowane: 'Wielkanoc Mode'});
  }
  if(kolor == 0) {
    document.body.style.backgroundColor = '#202225';
  } if (kolor == 1) {
    document.body.style.backgroundColor = '#0D47A1';
  }
  
}
odswiez() {
  fetch('https://papryka.pro/stemd', {mode: 'cors'})
      .then(response => response.json())
      .then(data => this.setState({ eee: data.stem }));
}
render() {
  const przycisk = {}
  if (this.state.tryb == 0 || this.props.tryb == 69) {
>>>>>>> nowe wydanie
  return (
    <div className="szczegoly">
      <div className="details" style={{textAlign: 'center'}}>
        <h1>Witaj w Stem!</h1>
        <p>Wybierz grę lub program na menu z lewej strony aby dowiedzieć się o niej więcej</p>
        <p>Jeżeli chcesz, aby twoja gra także się tu znalazła, napisz do mnie (Pizza)</p>
<<<<<<< HEAD
      </div>
=======
        <p>Stem <b>wymaga</b> dostępu do internetu. Bez niego program może nie działać poprawnie!</p>
        <div className="mode" 
        style={{display: 'inline-block', backgroundColor: '#202225'}} 
        onClick={() => this.nowyKolor(0)}>
        Normalny Mode</div>
        <div className="mode" 
        style={{display: 'inline-block', backgroundColor: '#0D47A1'}} 
        onClick={() => this.nowyKolor(1)}>
        Ocean Mode</div>
        <div className="mode" 
        style={{display: 'inline-block', backgroundColor: '#BF360C'}} 
        onClick={() => this.nowyKolor(2)}>
        Papryka Mode</div>
        <div className="mode" 
        style={{display: 'inline-block', backgroundColor: 'black'}} 
        onClick={() => this.nowyKolor(3)}>
        Losu Losu</div>
        <div className="mode"
        style={{display: 'inline-block', background: 'url("http://4.bp.blogspot.com/-g8l_rVY7a58/UVghl5x0hHI/AAAAAAAAB2Q/fSjsyWmipqY/s1600/Wielkanoc-61.jpg"'}}
        onClick={() => this.nowyKolor(66)}>
        Wielkanoc się zbliża Mode</div>
        <div className="mode"
        style={{display: 'inline-block', background: 'url("https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/spidersweb/2018/02/20180226_122027-1180x561.jpg")'}}
        onClick={() => this.nowyKolor(4)}>
        Xiaomi Mode</div>
        
        <p>Akcenty (zapisują się!)</p>

        <div className="akcent"
        style={{display: 'inline-block', background: '#01579B'}}
        onClick={() => nowyAkcent(0)}>
        Domyślny</div>
        <div className="akcent"
        style={{display: 'inline-block', background: '#B71C1C'}}
        onClick={() => nowyAkcent(1)}>
        Czerwony</div>
        <div className="akcent"
        style={{display: 'inline-block', background: '#ff4b01'}}
        onClick={() => nowyAkcent(2)}>
        Xiaomowy</div>
        <div className="akcent"
        style={{display: 'inline-block', background: 'black'}}
        onClick={() => nowyAkcent(3)}>
        Losu Losu</div>
      </div>
      <div className="smenu stemv">
        Stem v1.0.0 {this.state.koloryzowane && this.state.koloryzowane}
      </div>
      {/*<div className="okienko">
        <div className="dane">Stem</div>
        <div className="msg"><span>tu beda wiadomosci od stema<br />tu beda wiadomosci od stema<br />tu beda wiadomosci od stema</span></div>
        </div>*/}
>>>>>>> nowe wydanie
    </div>
  )
  } else if (this.props.tryb == 1 && this.props.data) {
    if (os.platform() == 'linux') {
      if(this.props.data.dl.linux) {
        var zagraj = 'Zagraj';
        var link = this.props.data.dl.linux;
<<<<<<< HEAD
        przycisk.backgroundColor = '#db4307';
      } else {
        var zagraj = 'Niedostępne'
        przycisk.backgroundColor = '#323232';
=======
        przycisk.backgroundColor = '#BF360C';
      } else {
        var zagraj = 'Niedostępne'
        przycisk.backgroundColor = '#424242';
>>>>>>> nowe wydanie
        var link = '';
      }
    } else if (os.platform() == 'win32') {
      if(this.props.data.dl.windows) {
        var zagraj = 'Zagraj';
        var link = this.props.data.dl.windows;
<<<<<<< HEAD
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
  
=======
        przycisk.backgroundColor = '#BF360C';
      } else {
        var zagraj = 'Niedostępne'
        var link = '';
        przycisk.backgroundColor = '#424242';
      }
    }
 return (
    <InfoGra akcent={this.props.akcent} tryb={this.props.data.id} przycisk={przycisk} link={link} zagraj={zagraj} data={this.props.data}/>
>>>>>>> nowe wydanie
);
  }
else if (this.props.tryb == 2) {
    let zasieg = null;
    return(
<<<<<<< HEAD
      <div className="details">
        <h1>O Stem</h1>
        <h3>Problem?</h3>
        <b>Nie widzisz listy gier?</b><br /><span>Stem odświeża ją co chwilę automatycznie. Sprawdź czy masz połączenie z internetem.</span><br />
        <b>Gra nie działa?</b><br /><span>Napisz do jej autora.</span><br />
        <h3>Informacje o Stem</h3>
        <p>Wersja {this.state.wersja}</p>
        <p>Autor: Pizza</p>
      </div>
=======
      <Informacje akcent={this.props.akcent} />
>>>>>>> nowe wydanie
    )
  } else if (this.props.tryb == 3) {
    // style={{background: this.myColor(1488)}} onClick={() => { this.setState({ tryb: 2 }); this.toggle(1488)}}
    return (
      <div className="webview">
<<<<<<< HEAD
      <button className="nbtn stemit" style={{background: this.myColor(3001)}} onClick={() => { this.setState({kupa: 'https://papryka.pro/stemit'}); this.toggle(3001)}}>Stemit</button>
      <button className="nbtn stemit" style={{background: this.myColor(3002)}} onClick={() => { this.setState({kupa: 'https://papryka.pro/stemit/czat'}); this.toggle(3002)}}>Czat</button>
      <button className="nbtn stemit" style={{background: this.myColor(3003)}} onClick={() => { this.setState({kupa: 'https://papryka.pro/alle'}); this.toggle(3003)} }>Kup nowe gry na Alletanio</button>
      <webview is nodeintegration onLoad={() => this.openDevTools()} className="webview" src={this.state.kupa} />
      </div>
    )
=======
      <webview is nodeintegration onLoad={() => this.openDevTools()} className="webview" src={this.state.kupa} />
      </div>
    )
  } else if (this.props.tryb == 4) {
    return (
      <StemGL />
    )
>>>>>>> nowe wydanie
  }
  
  }
}
export default Szczegoly;