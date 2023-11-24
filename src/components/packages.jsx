import { HeadingRow } from "./heading";
import { RouteContainer } from "./routeContainer";

export function Packages() {

    return (
        <section className="packages" id="packages">

            {HeadingRow("packages")}

            {HeadingRow("流行套餐")}

            < RouteContainer />
        
        </section> 
    )
}
  