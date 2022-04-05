import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../store/reducers/userReducer";
import Description from "../components/Description/Description";
import Hero from "../components/Hero/Hero";

const Home = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.userReducer?.data);

  const addRegistry = () => {
    dispatch(addData([...state, "xd"]));
  };

  const deleteRegistry = () => {
    const state2 = [...state];
    state2.pop();
    dispatch(addData(state2));
  };

  return (
    <>
      <Hero {...props} />
      {/* <div>
        <p>{JSON.stringify(state)}</p>
        <button onClick={addRegistry}>hola</button>
        <button onClick={deleteRegistry}>holant</button>
      </div> */}
      <Description />
    </>
  );
};

export default Home;
