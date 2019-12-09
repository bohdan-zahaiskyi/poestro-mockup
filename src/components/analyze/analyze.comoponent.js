import React, {Component} from 'react';
import './analyze.styles.css';

 class AnalyzeComponent extends Component {
    render() {
        return(
            <div className="generate-banner">
                <textarea className="poema poema-an">
                </textarea>
                <div className="generate-panel generate-panel-an">
                    <div class="humor">
                        <label for="mood">Mood:</label>
                        <input type="text"/>
                    </div>
                    <div id="seeds-an">
                        <label>Seeds:</label>
                        <textarea name="seeds-an" placeholder="однаково,чужина,неволя"></textarea>
                    </div>
                    <div className="generate-button" id="analyze-btn">
                        <h4>ANALYZE</h4>
                        <img />
                    </div>
                </div>
            </div>   
        )
    }
 }

 export default AnalyzeComponent;