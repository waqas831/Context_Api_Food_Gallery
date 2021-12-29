import { MakeContext } from "../context/MakeContext";
import { useState } from "react";
import Data from "../../src/components/Data";
const initialData = Data;
const MakeState = (props) => {
  const [data, setData] = useState(initialData);

  const searchtheitems = (e) => {
    const mysearchkeyword = e[0].toUpperCase() + e.slice(1);
    console.log(mysearchkeyword);

    let data2 = data.filter((item) => {
      return item.catagory === mysearchkeyword;
    });
    setData(data2);
  };

  const getnumberofitems = () => data.length;
  const myallmethods = {
    data,
    getnumberofitems,
    searchtheitems,
  };

  return (
    <MakeContext.Provider value={myallmethods}>
      {props.children}
    </MakeContext.Provider>
  );
};

export default MakeState;
