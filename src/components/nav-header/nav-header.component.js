import React from 'react';

export default function NavHeaderComponent() {
    return (
        <header id="header">
		    <div className="inner">
			    <a href="index.html" className="logo"><strong>Projection</strong> by TEMPLATED</a>
				<nav id="nav">
				    <a href="index.html">Home</a>
					<a href="generic.html">Generic</a>
					<a href="elements.html">Elements</a>
				</nav>
				<a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
			</div>`
		</header>
    );
}