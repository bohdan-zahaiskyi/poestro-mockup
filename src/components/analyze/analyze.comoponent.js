import React, {Component} from 'react';
import './analyze.styles.css';
import axios from 'axios';

 class AnalyzeComponent extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            moodAn: '',
            seedsAn: ''
        }
        this.sendToAnalyze = this.sendToAnalyze.bind(this)
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    sendToAnalyze = async function () {
        console.log("HALT! this.state", this.state)
        const headers = {
            'Content-Type': 'application/json'
        }
        const response = await axios.post(
            'http://localhost:3001/analyze/',
            {
                text: this.state.text,
                mood: this.state.moodAn,
                seeds: this.state.seedsAn
            },
            headers
        );
        console.log("HALT! response: ", response);
    }

    render() {
        return(
            <div className="generate-banner">
                <textarea id="text" className="poema poema-an">
                </textarea>
                <div className="generate-panel generate-panel-an">
                    <div class="humor">
                        <label for="mood">Mood:</label>
                        <input id="moodAn" type="text"/>
                    </div>
                    <div id="seeds-an">
                        <label>Seeds:</label>
                        <textarea id="seedsAn" name="seeds-an" placeholder="однаково,чужина,неволя"></textarea>
                    </div>
                    <div className="generate-button" id="analyze-btn" onClick={this.sendToAnalyze}>
                        <h4>ANALYZE</h4>
                        <img />
                    </div>
                </div>
            </div>   
        )
    }
 }

 export default AnalyzeComponent;