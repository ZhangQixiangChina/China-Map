import React, {Component} from 'react'

import './App.css';
import ChinaMap from "./map";
import {Button} from 'antd'
import {saveSvgAsPng} from 'save-svg-as-png'
import SettingTabs from "./tabs/index";


class App extends Component {

    state = {
        dataSource: {},
    }

    constructor(props) {
        super(props);
        this.onGetData = this.onGetData.bind(this)
        this.onSavePngClick = this.onSavePngClick.bind(this)
    }


    render() {
        return (
            <div className="app-contaienr">

                <div className="app-map-container">
                    <ChinaMap dataSource={this.state.dataSource} style={{marginTop: 50, marginRight: 50}}/>
                    <div style={{marginTop: 120, marginBottom: 40}}>
                        <Button onClick={this.onSavePngClick}>点击下载png</Button>
                    </div>
                </div>

                <div className="app-config-container">
                    <SettingTabs onGetData={this.onGetData}/>
                </div>


            </div>
        );
    }

    onGetData(mapData) {

        this.setState({
            dataSource: mapData
        })
    }

    onSavePngClick() {
        saveSvgAsPng(document.getElementById("cn-map"), "cn-map.png", {
            width: 560,
            height: 470
        })
    }


}


export default App;
