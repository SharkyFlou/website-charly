import './Rain.css';
import React, { useState, useEffect } from 'react';

function Rain() {
    const [isRaining, setisRaining] = useState(false);

    const[sakuring, setSakuring] = useState(false);
    const[leafing, setLeafing] = useState(false);
    const[snowing, setSnowing] = useState(false);


    const d = new Date();
    const month = d.getMonth();

    useEffect(() => {
        //if it's december or january, let it snow
        if (month === 11 || month === 0 || month === 1) {
            setSnowing(true);
            letItRain(true, false, false);

        }
        //if it's september, october or november, let it leaf ?
        else if (month === 8 || month === 9 || month === 10) {
            setLeafing(true);
            letItRain(false, true, false);

        }
        //if it's march, april or may, let it sakura ?
        else if (month === 2 || month === 3 || month === 4) {
            setSakuring(true);
            letItRain(false, false, true);

        }
        // eslint-disable-next-line
    }, []);

    const letItRain = (needSnow, needLeaf, needSakura ) => {


        const container = document.getElementById('rain__container__id');

        if (isRaining) {
            container.innerHTML = '';
            setisRaining(false);
            return;
        }

        setisRaining(true); // Set flag to true

        const rainObjectCount = 50;


        for (let i = 0; i < rainObjectCount; i++) {

            const rainObject = document.createElement('div');
            rainObject.className = needSnow ? 'snowflake' : 'leaf';

            const xPos = Math.random() * 100;
            

            rainObject.style.left = xPos + '%';

            rainObject.style.top = -50 + 'px';

            const size = Math.random() * 15 + 5;
            rainObject.style.width = size + 'px';
            rainObject.style.height = size + 'px';

            const speed = Math.random() * 5 + 3; // Slower speed between 1px/s and 2.5px/s
            rainObject.style.animationDuration = speed + 's';

            const sway = Math.random() * 10 - 5; // Random sway between -5px and 5px
            rainObject.style.transform = `translateY(0px) translateX(${sway}px)`; // Added horizontal movement
            

            const opacity = Math.random() * 0.5 + 0.3; // Random opacity between 0.7 and 1
            rainObject.style.opacity = opacity;

            const delay = Math.random() * 7 // Random delay between 0s and 3s
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

            if (needLeaf) {
                console.log('in leaf');

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
            else if (needSakura) {
                console.log('in sakura');

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
            <div className="rain-container" id="rain__container__id">

            </div>
            {snowing && <button className={isRaining ? "rain-button active" : "rain-button"} onClick={()=> letItRain(snowing, leafing, sakuring)}>
                <img src={process.env.PUBLIC_URL + "/images/rains/snow_flake.png"} alt="" />
            </button>
            }
            {leafing && <button className={isRaining ? "rain-button active" : "rain-button"} onClick={()=> letItRain(snowing, leafing, sakuring)}>
                <img src={process.env.PUBLIC_URL + "/images/rains/leaf1.png"} alt="" />
            </button>
            }
            {sakuring && <button className={isRaining ? "rain-button active" : "rain-button"} onClick={()=> letItRain(snowing, leafing, sakuring)}>
                <img src={process.env.PUBLIC_URL + "/images/rains/sakura_big.png"} alt="" />
            </button>
            }
        </>
    );
}

export default Rain;