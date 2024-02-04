import React, { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../../context/AppContext";
import { Card } from "../../interfaces";
import { bringCards } from "../../services/apiCalls";
import { CardCustom } from "../../common/Card/CardCustom";
import Spinner from "../../assets/spinner.png";

import "./Overview.css";

export const Overview: React.FC = () => {
  const { state, setState } = useContext(AppContext)!;
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const fetching = useRef(false);

  useEffect(() => {
    const bringData = async () => {
      if (!fetching.current) {
        fetching.current = true;
        setLoading(true);
        try {
          const fetched = await bringCards(state.order);
          if (fetched.success) {
            setCards(fetched.data);
            if (fetched.data.length === 0) {
              setState(prevState => ({ ...prevState, msg: "No data available." }));
            }
          } else {
            setState(prevState => ({ ...prevState, msg: fetched.error }));
          }
        } catch (error) {
          setState(prevState => ({ ...prevState, msg: "Error while fetching data." }));
        } finally {
          setLoading(false);
          fetching.current = false;
        }
      }
    };

    bringData();
  }, [state.order, setState]);

  const handleClick = (card: Card) => {
    setState(state => ({
      ...state,
      selected: card,
      msg: "",
    }));
  };

  return (
    <div className="overviewDesign">
      {loading ? (
        <div className="loadingPanel">
          <img src={Spinner} alt="Loading Spinner" />
        </div>
      ) : cards.length > 0 ? (
        <div className="overviewPanel">
          <div className="titleDesign">Overview</div>
          <div className="cardsPanel">
            {cards.map(card => (
              <CardCustom
                design={`cardDesign ${state.selected.Name === card.Name ? "cardSelected" : ""}`}
                key={card.Name}
                Name={card.Name}
                Description={card.Description}
                byEmit={handleClick}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="noDataPanel">
          <p>{state.msg || "Loading data..."}</p>
        </div>
      )}
    </div>
  );
};
