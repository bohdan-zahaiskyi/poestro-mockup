import React, {Component} from 'react';

 class AnalyzeComponent extends Component {
    render() {
        return(
            <div class="banner">
                    <div class="gri">
                        <div class="poema">
                            <p>Мені однаково, чи буду
                            Я жить в Україні, чи ні.</p>
                        </div>
                        <div class="humor">
                            <label for="mood">Mood</label>
                            <select name="Mood">
                                <option value="sad">SAD</option>
                                <option value="happy">HAPPY</option>
                                <option value="angry">ANGRY</option>
                            </select>
                        </div>
                        <div class="seed">
                            SEEDS<textarea id="message" name="message" placeholder="однаково,чужина,неволя"></textarea>
                        </div>
                        <div id="analyze">
                            <h4>ANALYZE</h4>
                            <img src="../img/SearchSeach.png" alt="SearchSeach"/>
                        </div>
                    </div>
                </div>   
        )
    }
 }

 export default AnalyzeComponent;