import React from "react";

interface WeatherResultProps {
    temp : number;
    onClick: () => void;
}

const WeatherResult = (props : WeatherResultProps) => {
    return (
        <div className="result">
            <p>{props.temp}</p>
            <button
                className="btn btn-primary"
                onClick={props.onClick}
            >
                Retour
            </button>
        </div>
    );
}

export default WeatherResult;