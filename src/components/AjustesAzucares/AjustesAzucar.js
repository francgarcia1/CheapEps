import React from "react";
import { useState } from "react";
import Recomendation from "../Recomendation/Recomendation";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../../store/reducers/userReducer";
import {
  AzContainer,
  AzSelectorBox,
  InfoExtra,
  InputValores,
  Menu,
  Tittle,
} from "./AjustesAzucaresstyles";

const AjustesAzucar = (props) => {
  const [opciones, setOpciones] = useState("");
  const [reco, setReco] = useState(false);
  const [gramos, setGramos] = useState("");

  const dispatch = useDispatch();
  const state = useSelector((state) => state?.userReducer?.data);
  const callback = React.useCallback(() => {
    dispatch(
      addData([
        ...state,
        { gramos: gramos, tipo: "naturales", opciones: opciones },
      ])
    );
  }, [dispatch, gramos, opciones, state]);

  const addRegistry = () => {
    dispatch(
      addData([
        ...state,
        { gramos: gramos, tipo: "naturales", opciones: opciones },
      ])
    );
  };

  const deleteRegistry = () => {
    const state2 = [...state];
    state2.pop();
    dispatch(addData(state2));
  };
  const handleClick = (data) => {
    console.log(gramos, opciones, "hpta vida", "mamadas");

    setOpciones(data);
    callback();
  };

  return (
    <div>
      <Tittle>Conoce mas</Tittle>
      <InfoExtra>{props.azucares.infoG}</InfoExtra>

      <AzContainer>
        <AzSelectorBox>
          <h2>Calcula tus valores nutricionales</h2>
          <Menu>
            <li className="dropdown">
              <div className="dropbtn">Has seleccionado: {opciones}</div>
              <div className="dropdown-content">
                {/* consejo de vida usar un option y un select */}
                {props.azucares.opciones.map((ops) => (
                  <div onClick={(e) => handleClick(ops)}>{ops}</div>
                ))}
              </div>
            </li>
          </Menu>
          <InputValores
            placeholder="Ingresa la cantidad en gramos"
            onChange={(e) => {
              setGramos(e.target.value);
            }}
          />

          <button onClick={(e) => setReco(true)}>Calcular</button>
        </AzSelectorBox>
        <div>{reco && <Recomendation valor={gramos}></Recomendation>}</div>
      </AzContainer>
    </div>
  );
};

export default AjustesAzucar;
