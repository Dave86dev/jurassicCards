import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

import "./Controls.css"
// import trex from "../../assets/trex.png"

export const Controls: React.FC = () => {

  const context = useContext(AppContext);

  if (!context) {
    return <div>Error: falsy AppContext</div>;
  }

  const { state } = context;

  return (
    <div className="controlsDesign">
      <div className="controlsPanel">
        {state.selected.Name !== "" &&
          <a
            href={`https://en.wikipedia.org/wiki/${state.selected.Name}`}
            target="_blank"
          >
            <div className="buttonWiki">Wikipedia</div>
          </a>
        }
      </div>
    </div>
  )
}
