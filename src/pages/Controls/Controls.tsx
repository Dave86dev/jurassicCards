import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { AppState } from "../../interfaces";

import "./Controls.css";

export const Controls: React.FC = () => {
  const { state } = useContext(AppContext)!;

  //   const submitHandler = () => {
  //     if (state.selected.realName !== "") {
  //       //There's a player selected then let's rock!.....
  //       const submitData = async () => {
  //         try {
  //           const answer = await submitPlayer(state.selected);

  //           if (answer.success) {
  //             setState((prevState: AppState) => ({
  //               ...prevState,
  //               msg: answer.message,
  //             }))
  //           } else {
  //             setState((prevState: AppState) => ({
  //               ...prevState,
  //               msg: answer.error,
  //             }))
  //           }
  //         } catch (error) {
  //           setState((prevState: AppState) => ({
  //             ...prevState,
  //             msg: "Error while fetching data.",
  //           }))
  //         }
  //       }

  //       submitData()
  //     } else {
  //       //If there is not a selected player we warn the user
  //       setState((prevState: AppState) => ({
  //         ...prevState,
  //         msg: "Please choose a player first before submit! ;)",
  //       }))
  //     }
  //   }

  return (
    <div className="controlsDesign">
      <div className="controlsPanel">
        {state.selected.Name !== "" ? (
          <a
            href={`https://en.wikipedia.org/wiki/${state.selected.Name}`}
            target="_blank"
          >
            <div className="buttonWiki">Wikipedia</div>
          </a>
        ) : (
          <div>placeholder image</div>
        )}
      </div>
    </div>
  );
};
