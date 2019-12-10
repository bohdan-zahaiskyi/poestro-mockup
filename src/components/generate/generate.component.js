import React, {Component} from 'react';
import './generate.styles.css';

 class GenerateComponent extends Component {
    constructor() {
        super();
        this.state = {
            showSpinner: false
        }
    }
    baba = () => {
        this.setState({
            showSpinner: !this.state.showSpinner
        })
    }
    render() {
        return(
            <div>
            {this.state.showSpinner && <div id="ge-loader"/>}
            <div class="generate-banner">
                <div className="generate-panel">
                    <div id="mode">
                        <label for="mode">Mode:</label>
                        <select name="mode">
                            <option value="ua">Whole</option>
                            <option value="ua">Step by step</option>
                        </select>
                    </div>
                    <div id="lang" onClick={this.baba}>
                        <label for="language">Language:</label>
                        <select name="Language">
                            <option value="ua">ua</option>
                        </select>
                    </div>
                    <div id="verses">
                        <label>Verses:</label>
                        <input type="number" placeholder="1" />
                    </div>
                    <div id="emphases">
                        <label>Emphases:</label>
                        <input type="number" placeholder="4" />
                    </div>
                    <div id="metre">
                        <label>Metre:</label>
                        <select name="metre">
                            <option value="trochee">Trochee</option>
                            <option value="iamb">Iamb</option>
                            <option value="sad">Anapest</option>
                            <option value="sad">Dactyle</option>
                        </select>
                    </div>
                    <div id="humor">
                        <label for="mood">Mood:</label>
                        <input name="Mood" type="text"/>
                    </div>
                    <div id="seeds">
                        <label>Seeds:</label>
                        <textarea id="message" name="message" placeholder="однаково,чужина,неволя"></textarea>
                    </div>
                </div>
                <div className="poema-container">
                    <div className="poema">
                        <p>Мені однаково, чи буду
                                <br />
                            Я жить в Україні, чи ні.
                                <br />
                            Чи хто згадає, чи забуде
                                <br />
                            Мене в снігу на чужині -
                        </p>    
                    </div>
                    
                    <div id="generate" className="generate-button">
                        <label>GENERATE</label>
                        <i className="fa fa-cogs"></i>
                    </div>
                </div>
                <div className="generate-change">
                    <div>
                        <div id="word">
                            <label>Word:</label>
                            <input type="text" placeholder="колодязь" />
                        </div>
                        <div id="change">
                            <label for="change">Change: </label>
                            <input type="text"/>
                        </div>
                    </div>
                    <div>
                        <div className="generate-button">
                            <label>APPLY CHANGE</label>
                        </div>
                        <div className="twoButtons">
                            <div className="generate-button">
                                <label>SAVE</label>
                            </div>
                            <div className="generate-button">
                                <label>CANCEL</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>  
        )
    }
 }

 export default GenerateComponent;