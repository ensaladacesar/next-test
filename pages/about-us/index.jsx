import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CardTempl from "../../components/card";

const AboutUs = () => {
  const [miGato, setMiGato] = useState("Tizne");
  const [miPerro, setMiPerro] = useState("Cleo");

  useEffect(() => {
    console.log("cambió el gato");
  }, [miGato]);

  useEffect(() => {
    console.log("cambió el perro");
  }, [miPerro]);

  useEffect(() => {
    console.log("todo cambia");
  });

  useEffect(() => {
    console.log("esto solo se imprime una vez");
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2>Hola {miGato}</h2>
            <Button onClick={() => setMiGato("Mama gats")}>Cambiar gato</Button>
            <h2>hola {miPerro}</h2>
            <Button onClick={() => setMiPerro("Mina")}>Cambiar perro</Button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <CardTempl
              name={miGato}
              changeName={setMiGato}
              newName={"Mamá gats"}
            />
          </div>
          <div className="col-md-3">
            <CardTempl
              name={miPerro}
              changeName={setMiPerro}
              newName={"Mina"}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
