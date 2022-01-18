import React, {useEffect, useState} from "react";

interface WeatherResultProps {
    temp : number;
    onClick: () => void;
}

const WeatherResult = (props : WeatherResultProps) => {
    const [bgColor, setBgColor] = useState<string>();
    const [msg, setMsg] = useState<string>();

    useEffect(() => {
        if(props.temp < 15) {
            setMsg('Il fait froid.');
            setBgColor('bg-cold');
        } else {
            setMsg('Il fait chaud.');
            setBgColor('bg-hot');
        }
    },[]);

    return (
        <div className={bgColor}>
            <div className="result d-flex flex-column w-25">
                <p>{msg}</p>
                <button
                    className="btn btn-primary"
                    onClick={props.onClick}
                >
                    Retour
                </button>
            </div>
        </div>
    );
}

export default WeatherResult;