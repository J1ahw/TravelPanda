import React, { useState } from "react";
import { RouteDetail } from './routeDetail'

export function RouteInfo({ routes }) {

  const [routeDetails, setRouteDetails] = useState({});

  function handleClickShowDetail(routeId) {
    setRouteDetails(prevDetails => ({
      ...prevDetails,
      [routeId]: !prevDetails[routeId]
  }));
  }

  return(
    <div className="route-container">
      {routes.map(route => {
        const viewLine = route.viewPoints.map(vp => vp.viewPoint_name).join(" => ");
        const pictureUrl =  `./images/city/${route.cityEN}.png`
        const mapUrl = `./images/routes/${route.route_id}/Map.png`
        return (
          <div className="route" key={route.route_id}>

            <div className='routeBox'>
              <img className="city-picture" src={pictureUrl}/>
              <h3>{route.countryCN} {route.cityCN}</h3>
              <p>{route.words}</p>
              <p>{route.duration}</p>
              <p>{viewLine}</p>
              <div className="price">{route.discountPrice}<span>{route.originalPrice}</span></div>
            </div>

            {routeDetails[route.route_id] && <RouteDetail viewPoints={route.viewPoints} routeId={route.route_id} mapUrl= {mapUrl}/> }

            <button className="btn" onClick={() => handleClickShowDetail(route.route_id)}>
              {routeDetails[route.route_id] ? '隐藏 信息' : '了解 更多'}
            </button>
            
          </div>
        );
      })}
    </div>
  )
}

