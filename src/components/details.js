import React from "react";
import { Container } from "@material-ui/core";

const details = (props) => {
  const id = props.match.params.id;
  const biz = props.biz.find((c) => c.id == id);

//   console.log("id: " + id);
//   console.log("biz: " + biz);

  return (
    <Container maxWidth="sm" key={biz.id}>
      <h2>{biz.name}</h2>
      <h2>{biz.description}</h2>
      <h2>{biz.hours}</h2>
      <h2>{biz.address}</h2>
    </Container>
  );
};

export default details;
