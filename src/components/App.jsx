import React, { useState } from "react";
import Header from "./header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  const [state, setState] = useState({
    CountOne: 0,
    CountTwo: 0,
    CountThree: 0,
    CountFour: 0
  });
  const increaseClick = (val) =>
    setState({
      ...state,
      [val]: state[val] + 1
    });

  const decreaseClick = (val) =>
    setState({
      ...state,
      [val]: state[val] - 1
    });

  const Delete = (val) => {
    setState(state[val]=0);
  };

  const { CountOne, CountTwo, CountThree, CountFour } = state;

  let total = CountOne + CountTwo + CountThree + CountFour;

  return (
    <div>
      <Header no={total} />
      <Note
        index="1"
        id="1"
        itemIncrease={increaseClick.bind(null, "CountOne")}
        itemDecrease={decreaseClick.bind(null, "CountOne")}
        no={CountOne}
        onDelete={Delete}
      />
      <Note
        index="2"
        id="2"
        itemIncrease={increaseClick.bind(null, "CountTwo")}
        itemDecrease={decreaseClick.bind(null, "CountTwo")}
        no={CountTwo}
        onDelete={Delete}
      />
      <Note
        index="3"
        id="3"
        itemIncrease={increaseClick.bind(null, "CountThree")}
        itemDecrease={decreaseClick.bind(null, "CountThree")}
        no={CountThree}
        onDelete={Delete}
      />
      <Note
        index="4"
        id="4"
        itemIncrease={increaseClick.bind(null, "CountFour")}
        itemDecrease={decreaseClick.bind(null, "CountFour")}
        no={CountFour}
        onDelete={Delete}
      />
      <Footer />
    </div>
  );
}

export default App;
