import React, { Component } from 'react';
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

class Szczegoly extends Component {

constructor(props) {
  super(props);
  this.state = {
    kupa: 'https://papryka.pro/stemit',
    wersja: '0.2.1',
    active: 3001,
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
  return (
    <div className="szczegoly">
      <div className="details" style={{textAlign: 'center'}}>
        <h1>Witaj w Stem!</h1>
        <p>Wybierz grę lub program na menu z lewej strony aby dowiedzieć się o niej więcej</p>
        <p>Jeżeli chcesz, aby twoja gra także się tu znalazła, napisz do mnie (Pizza)</p>
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
    </div>
  )
  } else if (this.props.tryb == 1 && this.props.data) {
    if (os.platform() == 'linux') {
      if(this.props.data.dl.linux) {
        var zagraj = 'Zagraj';
        var link = this.props.data.dl.linux;
        przycisk.backgroundColor = '#BF360C';
      } else {
        var zagraj = 'Niedostępne'
        przycisk.backgroundColor = '#424242';
        var link = '';
      }
    } else if (os.platform() == 'win32') {
      if(this.props.data.dl.windows) {
        var zagraj = 'Zagraj';
        var link = this.props.data.dl.windows;
        przycisk.backgroundColor = '#BF360C';
      } else {
        var zagraj = 'Niedostępne'
        var link = '';
        przycisk.backgroundColor = '#424242';
      }
    }
 return (
    <InfoGra akcent={this.props.akcent} tryb={this.props.data.id} przycisk={przycisk} link={link} zagraj={zagraj} data={this.props.data}/>
);
  }
else if (this.props.tryb == 2) {
    let zasieg = null;
    return(
      <Informacje akcent={this.props.akcent} />
    )
  } else if (this.props.tryb == 3) {
    // style={{background: this.myColor(1488)}} onClick={() => { this.setState({ tryb: 2 }); this.toggle(1488)}}
    return (
      <div className="webview">
      <webview is nodeintegration onLoad={() => this.openDevTools()} className="webview" src={this.state.kupa} />
      </div>
    )
  } else if (this.props.tryb == 4) {
    return (
      <StemGL />
    )
  }
  
  }
}
export default Szczegoly;