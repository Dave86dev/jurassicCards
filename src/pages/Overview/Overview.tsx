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
  const [msg, setMsg] = useState<string>("")
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
              setMsg("No data available")
            }
          } else {
            setMsg(fetched.error)
          }
        } catch (error) {
            setMsg("Error while fetching data")
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
          <p>{msg || "Loading data..."}</p>
        </div>
      )}
    </div>
  );
};
