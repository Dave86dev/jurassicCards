import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import "./Details.css";

export const Details: React.FC = () => {
  
  const context = useContext(AppContext);

  if (!context) {
    return <div>Error: falsy AppContext</div>;
  }

  const { state } = context;

  return (
    <div className="detailsDesign">
      <div className="detailsPanel">
        {state.selected.Name !== "" && (
          <div className="detailsData">
            <div className="dinoName">{state.selected.Name}</div>
            <br />
            <div>{state.selected.Description}</div>
          </div>
        )}
      </div>
    </div>
  );
};
