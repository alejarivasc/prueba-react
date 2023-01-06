import React from "react";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MiApi from "./components/MiApi";
import Search from "./components/Search";
import InfoCard from "./components/InfoCard";

function App() {
  const [data, setData] = useState([]); //estado para guardar los datos
  const [loading, setLoading] = useState(false); // un estado para mostrar el loading
  const [textoBuscar, setTextoBuscar] = useState(""); // estado para el buscador
  const [ordenado, setOrdenado] = useState("ASC"); //un estado para el ordenar

  const orderASC = (char1, char2) =>
    char1.name > char2.name ? 1 : char1.name < char2.name ? -1 : 0;

  const orderDESC = (char1, char2) => 
    char1.name < char2.name ? 1 : char1.name > char2.name ? -1 : 0;

  return (
    <>
      <Search
        setTextoBuscar={setTextoBuscar}
        setOrdenado={setOrdenado}
        textoBuscar={textoBuscar}
        ordenado={ordenado}
      />
      <MiApi setLoading={setLoading} setData={setData} />
      <Row className="gap-5 justify-content-center">
        {loading && (
          <h3 className="msg">
            Juro solemnemente que mis intenciones no son buenas...
          </h3>
        )}

        {data
          .sort(ordenado === "ASC" ? orderASC : orderDESC)
          .filter(({ image, name, house }) => {
            return (
              image &&
              (name.toLowerCase().includes(textoBuscar.toLowerCase()) ||
                house.toLowerCase().includes(textoBuscar.toLowerCase()))
            );
          })
          .map(({ image, name, house, ancestry, patronus }, index) => {
            return (
              <Col md="3" key={index}>
                <InfoCard
                  image={image}
                  name={name}
                  house={house}
                  ancestry={ancestry}
                  patronus={patronus}
                />
              </Col>
            );
          })}
      </Row>
    </>
  );
}

export default App;
