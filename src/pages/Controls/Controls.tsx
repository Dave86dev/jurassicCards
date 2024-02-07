import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { AppState } from "../../interfaces"

import "./Controls.css"

export const Controls: React.FC = () => {
  const { state, setState } = useContext(AppContext)!

  const handleClick = (sort: string) => {
    if (state.order !== sort) {
      //This avoids repeating api calls to sort again same criteria
      setState((state: AppState) => ({
        ...state,
        order: sort,
        msg: "",
      }))
    } else {
      setState((state: AppState) => ({
        ...state,
        msg: `Already in ${sort}ending order.`,
      }))
    }
  }

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
        {/* <div className="titleDesign">Controls</div> */}
        <div className="controlsButtons">
          <div className="sortControls">
            <div className="buttonSort" onClick={() => handleClick("asc")}>
              ASC
            </div>
            <div className="buttonSort" onClick={() => handleClick("desc")}>
              DESC
            </div>
          </div>
          {/* <div className="buttonSubmit" onClick={submitHandler}>
            Submit
          </div> */}
        </div>
      </div>
    </div>
  )
}