import React, { useState } from "react";
import { useEffect } from "react";
import { Container, NavLink, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import insti_img from "../../assets/img/instituicoes.png";
import principal_img from "../../assets/styles/Instituicao.css";
import Footer from "./components/Footer";

export default function Instituicoes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/static/ongs.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <div>
      <Container className="mt-3">
        <img src={insti_img} className="principal_img" />
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Foto</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Site</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, id) => (
              <tr key={id}>
                <td>{item.id}</td>
                <td>
                  <img src={item.image} width={100} />
                </td>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td>
                  <NavLink link={data.site}>Site</NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Footer />
      </Container>
    </div>
  );
}
