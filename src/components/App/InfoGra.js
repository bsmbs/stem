import React, { Component } from 'react';
import '../../assets/css/Szczegoly.scss';
import { shell } from 'electron';

export class InfoGra extends Component {
    constructor(props) {
        super(props);

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    handleMouseDown(event) {
        event.target.style.backgroundColor = this.props.akcent;
    } handleMouseLeave(event) {
        event.target.style.backgroundColor = '#121516';
    }
    render() {
    if(this.props.tryb >= 0) { 
        return (
    <div className="szczegoly">
    { this.props.data.img && <img src={this.props.data.img} /> }
    
    <div className="details" ref={(details) => this.details = details}>
    <p><span className="tytul" style={{textAlign: 'center'}}>{this.props.data.name}</span></p>
    <div className="opsct" style={{width: '95%', margin: 'auto', textAlign: 'center'}}>
    <p className="ops" onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseDown}>Autor: {this.props.data.autor}</p>
    <p className="ops" onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseDown}>Język: {this.props.data.lang}</p>
    <p className="ops" onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseDown}>Rozmiar: {this.props.data.rozmiar}</p>
    <p className="ops" onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseDown}>Wersja: {this.props.data.wersja}</p>
    <p className="ops" onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseDown}></p>
    <p dangerouslySetInnerHTML={{__html: this.props.data.opis.replace(/(\n|\\n)/g, '<br />')}}></p>
    </div></div>
    <div className="smenu">
      <button className="nbtn" style={this.props.przycisk} onClick={() => shell.openExternal(this.props.link)}>{this.props.zagraj}</button>
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
        )
    }
    }
}
export default InfoGra;