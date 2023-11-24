import React, { useState, useEffect } from 'react';
import { RouteInfo } from './routeInfo';

export function RouteContainer() {
    const routeData = [
        {
        route_id: 1,
        countryCN: "英国",
        countryEN: "England",
        cityCN: "伦敦",
        cityEN: "London",
        words:"伦敦City Walk来不",
        pictureUrl: "London.png",
        duration: "一日游",
        originalPrice: "£180.00",
        discountPrice: "£150.00",
        viewPoints: [
                        {
                        viewPoint_id : 1,
                        viewPoint_name: "英国国家美术馆",
                        viewPoint_introduction: "英国的国家美术馆",
                        },
                        {
                        viewPoint_id : 2,
                        viewPoint_name: "自然历史博物馆",
                        viewPoint_introduction: "英国的自然历史博物馆",
                        },
                        {
                        viewPoint_id : 3,
                        viewPoint_name: "维多利亚和阿尔伯特博物馆",
                        viewPoint_introduction: "英国的维多利亚和阿尔伯特博物馆",
                        },
                        {
                        viewPoint_id : 4,
                        viewPoint_name: "海德公园",
                        viewPoint_introduction: "英国的海德公园",
                        },
                        {
                        viewPoint_id : 5,
                        viewPoint_name: "大英博物馆",
                        viewPoint_introduction: "英国的大英博物馆",
                        },
                    ],
        },
        {
        route_id: 2,
        countryCN: "英国",
        countryEN: "England",
        cityCN: "伦敦",
        cityEN: "London",
        words:"伦敦City Walk来不",
        pictureUrl: "London.png",
        duration: "一日游",
        originalPrice: "£180.00",
        discountPrice: "£150.00",
        viewPoints: [
                        {
                        viewPoint_id : 1,
                        viewPoint_name: "LIBERTY",
                        viewPoint_introduction: "英国的LIBERTY",
                        },
                        {
                        viewPoint_id : 2,
                        viewPoint_name: "锦城小巷",
                        viewPoint_introduction: "英国的锦城小巷",
                        },
                        {
                        viewPoint_id : 3,
                        viewPoint_name: "大英博物馆",
                        viewPoint_introduction: "英国的大英博物馆",
                        },
                        {
                        viewPoint_id : 4,
                        viewPoint_name: "伦敦中国城",
                        viewPoint_introduction: "英国的伦敦中国城",
                        },
                    ],
        },
        {
        route_id: 3,
        countryCN: "英国",
        countryEN: "England",
        cityCN: "爱丁堡",
        cityEN: "Edingburge",
        words:"城堡为爱守着秘密",
        pictureUrl: "London.png",
        duration: "一日游",
        originalPrice: "£180.00",
        discountPrice: "£150.00",
        viewPoints: [
                        {
                        viewPoint_id : 1,
                        viewPoint_name: "爱丁堡城堡",
                        viewPoint_introduction: "英国的爱丁堡城堡",
                        },
                        {
                        viewPoint_id : 2,
                        viewPoint_name: "亚瑟王座",
                        viewPoint_introduction: "英国的亚瑟王座",
                        },
                        {
                        viewPoint_id : 3,
                        viewPoint_name: "卡尔顿山",
                        viewPoint_introduction: "英国的卡尔顿山",
                        },
                        {
                        viewPoint_id : 4,
                        viewPoint_name: "饭店",
                        viewPoint_introduction: "英国的饭店",
                        },
                    ],
        },
        {
        route_id: 4,
        countryCN: "德国",
        countryEN: "German",
        cityCN: "柏林",
        cityEN: "Berlin",
        words:"柏林柏林柏林",
        pictureUrl: "Berlin.png",
        duration: "三天两晚",
        originalPrice: "£400.00",
        discountPrice: "£300.00",
        viewPoints: [
                        {
                        viewPoint_id : 1,
                        viewPoint_name: "柏林1",
                        viewPoint_introduction: "柏林111",
                        },
                        {
                        viewPoint_id : 2,
                        viewPoint_name: "柏林2",
                        viewPoint_introduction: "柏林222",
                        },
                        {
                        viewPoint_id : 3,
                        viewPoint_name: "柏林3",
                        viewPoint_introduction: "柏林333",
                        },
                        {
                        viewPoint_id : 4,
                        viewPoint_name: "柏林4",
                        viewPoint_introduction: "柏林444",
                        },
                        {
                        viewPoint_id : 5,
                        viewPoint_name: "柏林5",
                        viewPoint_introduction: "柏林555",
                        },
                    ],
        },
        {
        route_id: 5,
        countryCN: "德国",
        countryEN: "German",
        cityCN: "多特蒙德",
        cityEN: "Dortmund",
        words:"大黄蜂主场BVB",
        pictureUrl: "Dortmund.png",
        duration: "三天两晚",
        originalPrice: "£400.00",
        discountPrice: "£300.00",
        viewPoints: [
                        {
                        viewPoint_id : 1,
                        viewPoint_name: "多特蒙德1",
                        viewPoint_introduction: "多特蒙德111",
                        },
                        {
                        viewPoint_id : 2,
                        viewPoint_name: "多特蒙德2",
                        viewPoint_introduction: "多特蒙德222",
                        },
                        {
                        viewPoint_id : 3,
                        viewPoint_name: "多特蒙德3",
                        viewPoint_introduction: "多特蒙德333",
                        },
                        {
                        viewPoint_id : 4,
                        viewPoint_name: "多特蒙德4",
                        viewPoint_introduction: "多特蒙德444",
                        },
                    ],
        },
    ]

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [filteredCities, setFilteredCities] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [filteredRoutes, setFilteredRoutes] = useState(routeData);

    useEffect(() => {
        if (selectedCountry) {
            setFilteredCities([...new Set(routeData.filter(route => route.countryEN === selectedCountry).map(route => route.cityEN))]);
        } else {
            setFilteredCities([...new Set(routeData.map(route => route.cityEN))]);
        }
    }, [selectedCountry]);

    useEffect(() => {
        if (selectedCity) {
            setFilteredCountries([...new Set(routeData.filter(route => route.cityEN === selectedCity).map(route => route.countryEN))]);
        } else {
            setFilteredCountries([...new Set(routeData.map(route => route.countryEN))]);
        }
    }, [selectedCity]);

    function handleSearch() {
        let newFilteredRoutes
        if (selectedCity) {
            newFilteredRoutes = routeData.filter(route => route.cityEN === selectedCity)
        } else if (selectedCountry) {
            newFilteredRoutes = routeData.filter(route => route.countryEN === selectedCountry)
        } else {
            newFilteredRoutes = routeData
        }
        setFilteredRoutes(newFilteredRoutes)
    }

    function handleCountryChange(e) {
        setSelectedCountry(e.target.value);
        setSelectedCity('');
    }

    function handleCityChange(e) {
        const newCity = e.target.value;
        setSelectedCity(newCity);

        const country = routeData.find(route => route.cityEN === newCity)?.countryEN;
        if (country) {
            setSelectedCountry(country);
        }
    }

    function handleReset() {
        setSelectedCity('')
        setSelectedCountry('')
        setFilteredRoutes(routeData)
    }

    return (
        <div className="package-container">
            <select className="countrySelector" value={selectedCountry} onChange={handleCountryChange}>
                <option value="">国家</option>
                {filteredCountries.map(countryEN => {
                    const countryCN = routeData.find(route => route.countryEN === countryEN).countryCN;
                    return <option key={countryEN} value={countryEN}>{countryCN} {countryEN}</option>
                })}
            </select>

            <select className="citySelector" value={selectedCity} onChange={handleCityChange}>
                <option value="">......告诉我你想去哪......</option>
                {filteredCities.map(cityEN => {
                    const cityCN = routeData.find(route => route.cityEN === cityEN).cityCN;
                    return <option key={cityEN} value={cityEN}>{cityCN} {cityEN}</option>
                })}
            </select>

            <button className="btn" onClick={handleSearch}>搜 索</button>

            <button className="btn" onClick={handleReset}>重 置</button>

            <RouteInfo routes = {filteredRoutes}/>
                    
        </div>
    )
}