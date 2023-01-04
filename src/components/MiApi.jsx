import {useEffect} from "react";

const MiApi = ({setLoading, setData}) => {
  

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://hp-api.onrender.com/api/characters"
      ); //promesa
      if (!response.ok) {
        throw "Falló consumo de la api";
      }
      const result = await response.json(); //transformamos la promesa a json
      if (result.length > 0) {
        //verificamos que existan dat os
        setData(result); // guardamos los datos en el estado
      } else {
        // si no existe mostramos un error en la consola
        console.log("Fallo el api");
      }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
};

export default MiApi;
