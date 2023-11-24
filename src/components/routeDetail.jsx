export function RouteDetail({ viewPoints, routeId, mapUrl }) {
  
  return(
    <div className="routeDetail">
      <label>景点预览</label>
      <img className="routeMap" src={mapUrl}/>
      <label>路线预览</label>
      <div className="viewPoints">
        {viewPoints.map(viewPoint => {
          const pictureUrl1 = `./images/routes/${routeId}/${viewPoint.viewPoint_id}-1.png`
          const pictureUrl2 = `./images/routes/${routeId}/${viewPoint.viewPoint_id}-2.png`
          return (
            <div className="viewPoint" key={viewPoint.viewPoint_id}>
              <label>{viewPoint.viewPoint_name}</label>
              <img src={pictureUrl1}/>
              <img src={pictureUrl2}/>
            </div>
          )}
        )}
      </div>
    </div>
  )
}