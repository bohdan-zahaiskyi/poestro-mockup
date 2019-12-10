import React, {Component} from 'react';
import './analyze.styles.css';
import axios from 'axios';

 class AnalyzeComponent extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            moodAn: '',
            seedsAn: '',
            noEmphasis: ['слово', 'другеслово'],
            showSpinner: false
        }
        this.sendToAnalyze = this.sendToAnalyze.bind(this)
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    sendToAnalyze = async function () {
        this.setState({
            showSpinner: true
        })
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
        this.setState({
            showSpinner: false
        });
    }
    selectEmphasis = (e) => {
        console.log("HALT! e.target: ", e.target);
        e.target.className='emph-letter-an'
        console.log("HALT! e.target: ", e.target);
    }

    render() {
        const words = [];
        for(let value of this.state.noEmphasis) {
            const letters = [];
            for(let letter of value) {
                letters.push(<span className="letter-an" onClick={this.selectEmphasis}>{letter}</span>)
            }
            words.push(<p className="word-an">{letters}</p>)
        }

        const noEmphasisDiv = this.state.noEmphasis.length ?(
            <div id="noEmphWords" className="generate-panel">
                <div>
                    <p>Words with no emphasis</p>
                    {words}
                </div>
            </div>
        ) : false;
        return(
            <div className="generate-banner">
                {this.state.showSpinner && <div id="an-loader"/>}
                <textarea id="text" className="poema poema-an">
                </textarea>
                <div className="generate-panel generate-panel-an">
                    <div className="humor">
                        <label>Mood:</label>
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
                {noEmphasisDiv}
            </div>   
        )
    }
 }

 export default AnalyzeComponent;