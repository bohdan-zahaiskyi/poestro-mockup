import React from 'react';
const MainPageComponent = () => {
    return(
		<div className="main-container">
			<div className="banner">
				<div className="greeting">
					<b>WELCOME TO POESTRO!</b>
				</div>
				<div className="hydra">
					<div className="hydra-first">
						<b className="h2">EVERYONE</b>
					</div>
					<div>
						<b className="h3">DESERVES</b>
					</div>
					<div className="hydra-middle">
						<b className="h3">TO BE</b>
					</div>
					<div className="hydra-last">
						<b className="h3 hydra-a">A </b>
						<b className="h1">POET</b>
					</div>
				</div>
        	</div>
			<div className="main-container">
                <div class="result-text">
                    <h3><b>SOME OF THE USER'S RESULTS</b></h3>
                </div>
                <div className="result">
					<span className="result-first">
						<i className="fa fa-play"></i>
						<p>SEEDS:</p>
						<span className="seeds">веселий, милий, зелений</span>
					</span>
					<span className="date">(12.09.2019)</span>
                </div>
                <div className="result">
					<span className="result-first">
						<i className="fa fa-play"></i>
						<p>SEEDS:</p>
						<span className="seeds">подорож, природа</span>
					</span>
					<span className="date">(15.09.2019)</span>
                </div>
                <div className="result">
					<span className="result-first">
						<i className="fa fa-play"></i>
						<p>SEEDS:</p>
						<span className="seeds">сонце, печера</span>
					</span>
					<span className="date">(17.09.2019)</span>
                </div>
                <div class="poem">
                    <p>Сонце він зірвати з листя
                    <br/>
                    У печері змін зреклися 
                    <br/>
                    Наймолодший дар в полоні  
                    <br/>            
                    Дух колодязь близько скроні</p>                
                </div>
				<div className="result">
					<span className="result-first">
						<i className="fa fa-play"></i>
						<p>SEEDS:</p>
						<span className="seeds">битва, меч, перемога</span>
					</span>
					<span className="date">(21.09.2019)</span>
                </div>   
          	</div>     
		</div>
    )
}

export default MainPageComponent;