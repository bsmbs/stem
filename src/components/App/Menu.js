import React, { Component } from 'react';
import { Titlebar } from 'react-titlebar-osx';
import { remote } from 'electron';

class Menu extends Component {
min() {
    remote.getCurrentWindow().minimize();
} 
zamknij() {
    remote.getCurrentWindow().close();
}
maksym() {
    if (remote.getCurrentWindow().isMaximized()) {
        remote.getCurrentWindow().unmaximize();
    } else {
        remote.getCurrentWindow().maximize()
    }
}
render() {
return (
    <Titlebar
   title="Stem"
   transparent={true}
   draggable={true}
   onFullscreen={() => this.maksym()}
   onClose={() => this.zamknij()}
   onMaximize={() => this.maksym()}
   onMinimize={() => this.min()}
    >eee</Titlebar>
    /* <div className="menu">
        <div className="tekt">Stem</div>
        <div className="odprawej">
          <div className="przycisk" onClick={this.min}>
            <i className="far fa-window-minimize" onClick={this.min}></i>
          </div>
          <div className="przycisk" onClick={this.zamknij}>
          ✖</div>
        </div>
    </div> */
    );
}
}
export default Menu;
