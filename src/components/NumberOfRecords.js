import React from "react";
import { MakeContext } from "../context/MakeContext";
import { useContext } from "react";

const NumberOfRecords = () => {
  const { getnumberofitems } = useContext(MakeContext);
  const record = getnumberofitems();

  return (
    <div style={{textAlign:'center',marginTop:'4%'}}>
      <b style={{textAlign:'center',fontSize:30,color:'purple',textTransform:'capitalize',alignItems:'center'}}>Total Items are {record} </b>
    </div>
  );
};

export default NumberOfRecords;
