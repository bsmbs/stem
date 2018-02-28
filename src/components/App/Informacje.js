import React, { Component } from 'react';
import { shell } from 'electron';
import '../../assets/css/Informacje.scss'
import os from 'os';


export function Informacje(props) {
    const handleMouseDown = function(event) {
        event.target.style.backgroundColor = props.akcent;
    } 
    const handleMouseLeave = function(event) {
        event.target.style.backgroundColor = '#121516';
    }
    return(
        <div>
        <div className="details">
            
            <img src="https://i.imgur.com/uECbza5.png" width="75px" height="75px" /><h1 className="ostem">Stem</h1>
            <div className="ops" style={{textAlign: 'center'}}><p className="ops">Autor: Pizza I WIELU INNYCH</p>
            <p className="ops" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseDown}>Język: JS</p>
            <p className="ops" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseDown}>Rozmiar: ~30MB</p>
            <p className="ops" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseDown}>Wersja: 1.0</p>
            <p>Stem <span style={{fontSize: '150%', fontWeight: 'lighter'}}>1.0</span>.0</p>
            <p>Stworzone z serduszkiem przez Pizza</p>
            <p>Dziękuję UsernameMsTv za stworzenie ikony</p>
            <p>dinner mido<br />
                Kurier: Witaj.<br />
                Kurier: Mam dla ciebie palete.<br />
                Kurier: Ale najpierw<br />
                Kurier: Cho na klepę.<br />
                Kurier wręcza Tobie obiadek
            </p></div>
        </div>
        <div className="smenu">
            <button className="nbtn zagraj" onClick={() => shell.openExternal('https://github.com/pizza61/stem/issues')}>Zgłoś błąd/propozycję</button>
            <button className="nbtn source" onClick={() => shell.openExternal('https://github.com/pizza61/stem')}>Github</button>
        </div>
        </div>
    )
}
export default Informacje;