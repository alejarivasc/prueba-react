import React from 'react';
import Card from "react-bootstrap/Card";


const InfoCard = ({image, name, house, ancestry, patronus }) => {
  return (
                  <Card className="card" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} className="img" />
                <Card.Body>
                  <Card.Title className="text-center">
                    Nombre: 
                    {name}
                    <hr />
                  </Card.Title>
                  <Card.Text className="text-center">
              
                  <p>Casa: {house}</p>
                  <p>Ascendencia: {ancestry}</p>
                   <p>Patronus: {patronus}</p>
                  </Card.Text>
                </Card.Body>
              </Card>



  )
}

export default InfoCard;