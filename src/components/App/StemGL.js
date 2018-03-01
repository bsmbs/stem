import React, { Component } from 'react';
import '../../assets/css/Szczegoly.scss';
import '../../assets/css/StemGL.scss';
import http from 'http';

export class StemGL extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            autor: null,
            wersja: null,
            rozmiar: null,
            jezyk: null,
            opis: null,
            dlwindows: null,
            dllinux: null,
            skan: null,
            source: null,
            errory: null
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    wyslij(event) {
        if(this.state.name && this.state.autor && this.state.wersja && this.state.rozmiar && this.state.jezyk && this.state.opis && (this.state.dlwindows || this.state.dllinux)) {
            var body = JSON.stringify({
                name: this.state.name,
                autor: this.state.autor,
                wersja: this.state.wersja,
                rozmiar: this.state.rozmiar,
                lang: this.state.jezyk,
                opis: this.state.opis,
                dlwindows: this.state.dlwindows,
                dllinux: this.state.dllinux,
                skan: this.state.skan,
                source: this.state.source
            })
            var request = new http.ClientRequest({
                hostname: "papryka.pro",
                port: 3000,
                path: "/api/opengl",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Content-Length": Buffer.byteLength(body)
                }
            })
                this.setState({errory: 'Twoja gra zostanie dodana na Stema po zatwierdzeniu!'});
            request.end(body);
        }
        else {
            this.setState({errory: 'Musisz wypełnić wszystko'})
        }
        event.preventDefault();
    }
    render() {
        return (
        <div>
        <p style={{padding: '15px', textAlign: 'center'}}>Chcesz dodać swoją grę na Stema? Nie ma problemu! Użyj Stem OpenGL! Pamiętaj, aby twoja gra była też na #czat-dev lub #dev</p>
        {this.state.errory &&  <p style={{padding: '5px', textAlign: 'center'}}>{this.state.errory}</p> }
        <form action="" onSubmit={this.wyslij}>
        <div className="opengl">
                <div className="opengla">
                <label>Nazwa gry:</label>
                <input type="text" 
                name="name" 
                onChange={this.handleInputChange}
                value={this.state.name} />
                <label>Autor:</label>
                <input type="text" 
                name="autor"
                onChange={this.handleInputChange}
                value={this.state.autor} />
                <label>Wersja:</label>
                <input type="text" 
                name="wersja"
                onChange={this.handleInputChange}
                value={this.state.wersja}/>
                <label>Rozmiar</label>
                <input type="text" 
                name="rozmiar"
                onChange={this.handleInputChange}
                value={this.state.rozmiar} />
                <label>Język (programowania)</label>
                <input type="text"
                name="jezyk"
                onChange={this.handleInputChange}
                value={this.state.jezyk}/>
                <label>Opis</label>
                <input type="text" placeholder="\n dla nowej linii" 
                name="opis"
                onChange={this.handleInputChange}
                value={this.state.opis} />
                </div>
                <div className="openglb">
                <label>Linki do pobrań, przynajmniej jeden:</label>
                <br /><label>Windows</label>
                <input type="text" 
                name="dlwindows"
                onChange={this.handleInputChange}
                value={this.state.dlwindows}/>
                <label>Linux</label>
                <input type="text" 
                name="dllinux"
                onChange={this.handleInputChange}
                value={this.state.dllinux}/>
                <label>Opcjonalnie:</label>
                <br /><label>Skan</label>
                <input type="text" 
                name="skan"
                onChange={this.handleInputChange}
                value={this.state.skan}/>
                <label>Link do source/informacji</label>
                <input type="text" 
                name="source"
                onChange={this.handleInputChange}
                value={this.state.source}/>
                <input type="button" onClick={this.wyslij.bind(this)} className="nbtn" style={{backgroundColor: 'green'}} value="Wyślij!" />
                </div>
        </div></form>
        </div>
        )
    }
}

/**/