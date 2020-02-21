import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
  margin: 'auto',
  width: '500px'
}

function App() {
  return (
    <div style={styles}>
      <Carousel>
        <div>
          <img src = "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" alt="Hong Kong" />
          <a className = "legend" href = "https://en.wikipedia.org/wiki/Hong_Kong" target = "_blank">
              Hong_Kong
            </a>
        </div>
        <div>
          <img src = "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt="Singapore"/>
          <a className = "legend" href="https://en.wikipedia.org/wiki/Singapore" target="_blank">
            Singapore
          </a>
        </div>
        <div>
			  	<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt="Japan"/>
          <a className="legend" href="https://en.wikipedia.org/wiki/Japan" target="_blank">
            Japan
            </a>
        </div>
        <div>
				  <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt="Las Vegas"/>
          <a className= "legend" href="https://en.wikipedia.org/wiki/Las_Vegas" target="_blank">
            Las Vegas
            </a>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
