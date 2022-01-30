import { useState } from 'react'
import './Weather.css'
import haze from './image/haze.jpg'
import clearsky from './image/clearsky.jpg'
import overcastclouds from './image/overcastclouds.jpg'
import scatteredclouds from './image/scatteredclouds.jpg'
import lightintensitydrizzle from './image/lightintensitydrizzle.jpg'
import fewclouds from './image/fewclouds.jpg'
import fog from './image/fog.jpg'
let imageindex
let y
const Weather = (props) => {
    const [description, setDescription] = useState("")
    const [Country, SetCountry] = useState("")
    const [cityname, setcityname] = useState("")
    const [temp, SetTemp] = useState("")
    const [name, setname] = useState("")
    const [Humid, setHumed] = useState("")
    const GetWeather = () => {
        fetch(" http://api.openweathermap.org/data/2.5/weather?units=metric&q=" + cityname + "&appid=259afd0a1f4898b6fb53b092fc6f48d0")
            .then(res => res.json())
            .then((data) => {
                setDescription(data.weather[0].description)
                SetCountry(data.sys.country)
                SetTemp(data.main.temp)
                setname(data.name)
                setHumed(data.main.humidity)
            })
    }
    let arrayweather = [
        { weathername: 'clear sky', src: clearsky, alt: "imageWEather" },
        { weathername: 'haze', src: haze, alt: "imageWEather" },
        { weathername: 'overcast clouds', src: overcastclouds, alt: "imageWEather" },
        { weathername: 'scattered clouds', src: scatteredclouds, alt: "imageWEather" },
        { weathername: 'light intensity drizzle', src: lightintensitydrizzle, alt: "imageWEather" },
        { weathername: 'few clouds', src: fewclouds, alt: "imageWEather" },
        { weathername: 'fog', src: fog, alt: "imageWEather" }
    ];

    imageindex = arrayweather.map((index) => {
        if (index.weathername === description) {
            // console.log(index.src)
            return <img src={index.src} alt={index.alt} className='image' />
        }
    })
    function ChangeNamecity(event) {
        setcityname(event.target.value)
    }

    const dateUser = new Date();
    let textDAte = dateUser.toString();
    textDAte = textDAte.slice(0, 21)


    return (
        <div className='container'>
            <input onChange={ChangeNamecity} placeholder='Enter Your City' />
            <button onClick={GetWeather} >Search</button>
            <div className='contain'>
                <div className='namecountry'>
                    <span className='TextDescription'  >{name}</span>
                    <span> " " </span>
                    <span className='TextDescription'>{Country}</span>
                </div>
                <div className='TextDescription' >{textDAte}</div>
                <div className='TextDescription' >{props.temp}{temp}</div>
                <div className='image'>{imageindex}</div>
                <div className='TextDescription'>{y}</div>
                <div className='TextDescription'>{description}</div>
                <div className='TextDescription'>{props.humid}{Humid}</div>
            </div>


        </div>

    );
}

export default Weather;
