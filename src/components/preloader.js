import React, {useEffect} from 'react';

const Preloader = () => {
    const animation = ()=>{
        let counter = 0;
        let c = 0;
        const i = setInterval(function () {
            let counterDiv = document.getElementsByClassName("counter-number")
            let counterBar = document.getElementsByClassName("divider")
            if (counterDiv.length > 0 && counterBar.length > 0) {
                counterDiv[0].innerHTML = counter + "%";
                counterBar[0].style.width = counter + "%";
                counter++;
                c++;
            }

            if (counter === 101) {
                clearInterval(i);
            }
        }, 10);
    }

    useEffect(() => {
        animation()
    }, [])

    return (
        <div className="relative w-screen h-screen bg-slate-800">
            <div className="flex h-screen w-screen justify-center items-center loading-page">
                <div className="counter relative text-center">
                    <p>loading</p>
                    <h1 className='counter-number my-8'>0%</h1>
                    <hr className='divider'/>
                </div>
            </div>
        </div>

    );
};

export default Preloader;