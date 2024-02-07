import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

import "./Details.css"

export const Details: React.FC = () => {

    const { state } = useContext(AppContext)!

    return(
        <div className="detailsDesign">
            {state.selected.Name !== '' &&
                <div className="detailsPanel">
                    {/* <div className="titleDesign">Details</div> */}
                    <div className="detailsData">
                        <div> - {state.selected.Name}</div>
                        <div> - {state.selected.Description}</div>
                    </div>    
                </div>
            }
        </div>
    )
}