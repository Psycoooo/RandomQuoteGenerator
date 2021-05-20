import React from "react";

const Ninjas = ({ ninjas }) => {
  const ninjaList = ninjas.map((ninjas) => {
    return (
      <div className="ninja" key={ninjas.id}>
        <div>Name: {ninjas.name}</div>
        <div>Age: {ninjas.age > 20 ? x.name : "ooooohhhh"}</div>
        <div>Belt: {ninjas.belt}</div>
        <hr></hr>
      </div>
    );
  });
  return <div>{ninjaList}</div>;
};

export default Ninjas;
