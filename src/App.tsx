import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//constants
import {API_KEY, API_URL} from './api/config'

//services
import useFetchWeather from "./services/useFetchWeather";

//components
import WeatherResult from "./components/WeatherResult";
import CityInput from "./components/CityInput";

const App = () => {
    const [isResult, setResult] = useState(false);
    const {data, error, setUrl} = useFetchWeather("");

    const toggleResult = () => {
        if(isResult === true) {
            setResult(false);
        } else {
            setResult(true);
        }
    }

    useEffect(() => {
        console.log(data);
        console.log(error);
        if(data && !error) {
            toggleResult();
        }
    },[data || error]);

    return (
        <div className="App d-flex justify-content-center align-items-center h-100 w-100">
            {isResult ? (
                <WeatherResult temp={8} onClick={() => toggleResult()}/>
            ) : (
                    <CityInput onSearch={(city : string) => setUrl(`${API_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)} />
                )
            }
        </div>
    );
}

export default App;