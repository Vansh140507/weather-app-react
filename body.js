import { useState,useEffect } from "react";


export default function Body(){

    const [Weather,setWeather] = useState(null);
    const [City,setCity] = useState("");
    const [Error,setError] = useState(null)

    async function generatedata(City) {
        try{
            const resp = await fetch(`https://wttr.in/${City}?format=j1`);
            const data = await resp.json();
            setWeather(data);
            setError(null);
        }catch(e){
            setError("city not found");
        }

        
    }

    return(
        <>
         <div className="content">
            <input type="text" placeholder="Enter your city name " value={City}    onKeyDown={(e) => e.key === "Enter" && generatedata(City)}  onChange={(e)=>setCity(e.target.value)}></input>
            <button onClick={()=>generatedata(String(City))}>search</button>
        </div>


        <div>
            {
                 Weather && Weather.current_condition.map((value,index)=>{
                    return(
                        <div key={index} className="card">
                            <div className="card_img">
                                <img className="image" src="https://play-lh.googleusercontent.com/vfqNczQI4RdQTIc7c3JjJ6KhUKceYe2vh7B7VXNRqMgyDcwzXWPt8PgxEhEfjgdowGug_J5IEB0Y2jj2YNTs"></img>
                                <div>
                                    <h2>📍{City} , {Weather.nearest_area[0].country[0].value}</h2>
                                    <h2>Current Weather</h2>
                                </div>
                                
                            
                            </div>

                            <div className="data">
                                <h2>🌡️ Temprature:{value.temp_C}C°</h2>
                                <h2>💧 Humidity: {value.humidity}% </h2>
                                <h2>🤔Feels like {value.FeelsLikeC}C° </h2>
                                <h2>💨 Wind: {value.windspeedKmph}Kmph</h2>
                                <h2>☁️ Condition: {value.weatherDesc[0].value}</h2>
                            </div>

      
                            

                        </div>
                    )
                    

                })
            }
         
        </div>
        </>
       
    )
}