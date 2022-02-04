import React, { useState } from 'react';
import './Dashboard.css'
import Slot from '../Slot/Slot'
let curVal
const items = ["🥰", "😄", "😃", "🥶", "😠"];
function Dashboard() {

    const randomizer = () => {
        let randomNumber = [];
        let i;
        for (i = 0; i < 9; i++) {
            randomNumber.push(Math.trunc(Math.random() * 3));
        }
        curVal = randomNumber;
        return curVal;
    };
    const [randomNumber, setRandomNumber] = useState(randomizer());
    return (
        <div className="dashboard">
            <div className="slots">
                <Slot
                    x={items[randomNumber[0]]}
                    y={items[randomNumber[1]]}
                    z={items[randomNumber[2]]}
                />
                <hr />
                <Slot
                    x={items[randomNumber[3]]}
                    y={items[randomNumber[4]]}
                    z={items[randomNumber[5]]}
                />
                <hr />
                <Slot
                    x={items[randomNumber[6]]}
                    y={items[randomNumber[7]]}
                    z={items[randomNumber[8]]}
                />
            </div>
            <button
                className="btn-class"
                onClick={() => setRandomNumber(randomizer())}
            >
                CLICK TO ROLL
            </button>

            <p>©️ Mehul Dev 2022 - All Copyrights reserved</p>
        </div>
    );
}

export default Dashboard;
