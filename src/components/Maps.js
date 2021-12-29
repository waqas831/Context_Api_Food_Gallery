import React from "react";
import { MakeContext } from "../context/MakeContext";
import { useContext } from "react";

import { Col, Image, Row } from "react-bootstrap";
import NumberOfRecords from "./NumberOfRecords";

const Maps = () => {
  const mydata = useContext(MakeContext);
  const records=mydata.getnumberofitems();
  const alldata=mydata.data;
  return (
    <div>
      <NumberOfRecords />
      <Row>
        {alldata.map((data, index) => {
          return (
            <Col md={6} className="mt-5" key={data.id}>
              <Row>
                <Col md={6}>
                  <Image
                    src={data.image}
                    fluid
                    style={{ height: "100%", width: "100%" }}
                  />
                </Col>
                <Col md={6}>
                  <h2 className="text-black fs-2 text-center mb-1">
                  {data.name}
                  </h2>
                  <p
                    className="fs-5"
                    style={{
                      textAlign: "start",
                      alignContent: "center",
                      color: "black",
                    }}
                  >
                  {data.desc}
                  </p>
                  <div
                    className="fs-3 d-flex"
                    style={{
                      justifyContent: "space-around",
                      fontWeight: "bold",
                    }}
                  >
                    <div style={{ textAlign: "start" }}>
                      <span>${data.price}</span>
                    </div>
                    <div>
                      <span>{data.catagory}</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Maps;
