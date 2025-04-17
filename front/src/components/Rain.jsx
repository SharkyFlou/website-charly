import './Rain.css';
import React, { useState, useLayoutEffect } from 'react';

function Rain() {
    const [isRaining, setisRaining] = useState(false);

    const [objectRain, setObjectRain] = useState("");
    const SNOW = "snow";
    const LEAF = "leaf";
    const SAKURA = "sakura";

    const d = new Date();
    const month = d.getMonth();

    useLayoutEffect(() => {
        const startRaining = () => {
            setTimeout(() => {
                //if it's december or january, let it snow
                if (month === 11 || month === 0 || month === 1) {
                    setObjectRain(SNOW);
                    letItRain(SNOW);
                }
                //if it's september, october or november, let it leaf ?
                else if (month === 8 || month === 9 || month === 10) {
                    setObjectRain(LEAF);
                    letItRain(LEAF);
                }
                //if it's march, april or may, let it sakura ?
                else if (month === 2 || month === 3 || month === 4) {
                    setObjectRain(SAKURA);
                    letItRain(SAKURA);
                }
                // eslint-disable-next-line
            }, 2000);
        };

        startRaining();
        // eslint-disable-next-line
    }, []);



    const letItRain = (objectRaining) => {
        const container = document.getElementById('rain_container_id');

        if (isRaining) {
            container.innerHTML = '';
            setisRaining(false);
            return;
        }

        setisRaining(true); // Set flag to true

        const rainObjectCount = 40 + Math.min(window.innerWidth/50, 30); // Calculate number of rain objects

        const speedDifMax = Math.min (window.innerHeight / 100, 5); // Maximum speed difference based on window height
        const speedBase = 15 + Math.max( ((1200-window.innerHeight) /500) *10, 0); // Slower speed between 1px/s and 2.5px/s

        console.log("speedBase", speedBase);
        console.log("speedDifMax", speedDifMax);
        console.log("window.innerHeight", window.innerHeight);
        for (let i = 0; i < rainObjectCount; i++) {

            const rainObject = document.createElement('div');
            rainObject.className = objectRaining === SNOW ? 'snowflake' : LEAF;

            const xPos = Math.random() * 100;


            rainObject.style.left = xPos + '%';

            rainObject.style.top = -50 + 'px';

            const size = Math.random() * 15 + 5;
            rainObject.style.width = size + 'px';
            rainObject.style.height = size + 'px';

            const speedDif = Math.random() * speedDifMax; // Random speed difference between 0 and speedDifMax
            const currentSpeed = speedBase + speedDif; // Calculate current speed
            rainObject.style.animationDuration = currentSpeed + 's';

            const opacity = Math.random() * 0.5 + 0.3; // Random opacity between 0.7 and 1
            rainObject.style.opacity = opacity;

            const delay = Math.random() * currentSpeed; // Random delay between 0s and speed
            rainObject.style.animationDelay = delay + 's'; // Set animation delay

            container.appendChild(rainObject);

            if (i % 3 === 0) {
                rainObject.classList.add('blurry');
            }

            let classNameAnim = "rain_anim1";
            if (i % 3 === 1) {
                classNameAnim = "rain_anim2";
            }
            else if (i % 3 === 2) {
                classNameAnim = "rain_anim3";
            }

            if (objectRaining === LEAF) {

                //set image of leaf
                for (let y = 0; y < 7; y++) {
                    if (i % 7 === y) {
                        rainObject.style.backgroundImage = "url(" + process.env.PUBLIC_URL + "/images/rains/leaf" + (y + 1) + ".png)";
                    }
                }
                //bigger size
                rainObject.style.width = 50 + 'px';
                rainObject.style.height = 50 + 'px';
            }
            else if (objectRaining === SAKURA) {

                //set image of sakura
                for (let y = 0; y < 7; y++) {
                    if (i % 7 === y) {
                        rainObject.style.backgroundImage = "url(" + process.env.PUBLIC_URL + "/images/rains/sakura" + (y + 1) + ".png)";
                    }
                }
                //bigger size
                rainObject.style.width = 50 + 'px';
                rainObject.style.height = 50 + 'px';
            }

            rainObject.classList.add(classNameAnim);

        }
    }

    return (
        <>
            <div className="rain-container" id="rain_container_id">

            </div>
            {objectRain === SNOW && <button className={isRaining ? "rain-button active" : "rain-button"} onClick={() => letItRain(SNOW)}>
                <img src={process.env.PUBLIC_URL + "/images/rains/snow_flake.png"} alt="" />
            </button>
            }
            {objectRain === LEAF && <button className={isRaining ? "rain-button active" : "rain-button"} onClick={() => letItRain(LEAF)}>
                <img src={process.env.PUBLIC_URL + "/images/rains/leaf1.png"} alt="" />
            </button>
            }
            {objectRain === SAKURA && <button className={isRaining ? "rain-button active" : "rain-button"} onClick={() => letItRain(SAKURA)}>
                <img src={process.env.PUBLIC_URL + "/images/rains/sakura_big.png"} alt="" />
            </button>
            }
        </>
    );
}

export default Rain;