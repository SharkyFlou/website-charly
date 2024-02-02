import './Rain.css';
import React from 'react';
import { useState } from 'react';

function Rain() {
    const [isRaining, setisRaining] = useState(false);
    let needSnow = false;
    let needLeaf = false;

    const letItRain = () => {
        const container = document.getElementById('rain-container');

        if (isRaining) {
            container.innerHTML = '';
            setisRaining(false);
            return;
        }

        setisRaining(true); // Set flag to true

        const snowflakeCount = 50;

        for (let i = 0; i < snowflakeCount; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = needSnow ? 'snowflake' : 'leaf';

            const xPos = Math.random() * window.innerWidth;
            snowflake.style.left = xPos + 'px';

            snowflake.style.top = -50 + 'px';

            const size = Math.random() * 15 + 5;
            snowflake.style.width = size + 'px';
            snowflake.style.height = size + 'px';

            const speed = Math.random() * 5 + 3; // Slower speed between 1px/s and 2.5px/s
            snowflake.style.animationDuration = speed + 's';

            const sway = Math.random() * 10 - 5; // Random sway between -5px and 5px
            snowflake.style.transform = `translateY(0px) translateX(${sway}px)`; // Added horizontal movement

            const opacity = Math.random() * 0.5 + 0.3; // Random opacity between 0.7 and 1
            snowflake.style.opacity = opacity;

            const delay = Math.random() * 7 // Random delay between 0s and 3s
            snowflake.style.animationDelay = delay + 's'; // Set animation delay

            container.appendChild(snowflake);

            if (i % 3 === 0) {
                snowflake.classList.add('blurry');
            }

            let classNameAnim = "rain_anim1";
            if (i % 3 === 1) {
                classNameAnim = "rain_anim2";
            }
            else if (i % 3 === 2) {
                classNameAnim = "rain_anim3";
            }

            if (needLeaf) {
                //set image of leaf
                for (let y = 0; y < 7; y++) {
                    if (i % 7 === y) {
                        snowflake.style.backgroundImage = "url(" + process.env.PUBLIC_URL + "/images/rains/leaf" + (y + 1) + ".png)";
                    }
                }
                //bigger size
                snowflake.style.width = 50 + 'px';
                snowflake.style.height = 50 + 'px';
            }

            snowflake.classList.add(classNameAnim);

        }
    }
    const d = new Date();
    const month = d.getMonth();



    //if it's december or january, let it snow
    if (month === 11 || month === 0) {
        needSnow = true;
        //wait the page to be loaded
        window.addEventListener('load', function () {
            letItRain();
        });
    }
    //if it's september, october or november, let it leaf ?
    if (month === 8 || month === 9 || month === 10) {
        needLeaf = true;
        //wait the page to be loaded
        window.addEventListener('load', function () {
            letItRain();
        });
    }



    return (
        <>
            <div className="rain-container" id="rain-container">

            </div>
            {needSnow && <button className={isRaining ? "rain-button active" : "rain-button"} onClick={letItRain}>
                <img src={process.env.PUBLIC_URL + "/images/rains/snow_flake.png"} alt="" />
            </button>
            }
            {needLeaf && <button className={isRaining ? "rain-button active" : "rain-button"} onClick={letItRain}>
                <img src={process.env.PUBLIC_URL + "/images/rains/leaf1.png"} alt="" />
            </button>
            }
        </>
    );
}

export default Rain;