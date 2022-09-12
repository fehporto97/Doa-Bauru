import React from "react";
import { Container } from "react-bootstrap";
import insti_img from "../../assets/img/instituicao.png";
import principal_img from "../../assets/styles/Instituicao.css";
import Footer from "./components/Footer";
import Table from "react-bootstrap/Table";
import { FaInstagram } from "react-icons/fa";

export default function Instituicoes() {
  return (
    <div>
      <Container className="mt-3">
        <img src={insti_img} className="img_principal" />
        <h1 className="titulo">
          Conheca mais sobre as instituicoes parceiras.{" "}
        </h1>
        <Table striped bordered hover size="sm" className="tabela-inst">
          <thead>
            <tr>
              <th>Nome da instituicao</th>
              <th>Cidade</th>
              <th>Instagram</th>
              <th>Site</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apae</td>
              <td>Bauru - SP</td>
              <td>
                <a href="https://www.instagram.com/apaebauru/" target="_blank">
                  <FaInstagram /> @apaebauru
                </a>
              </td>
              <td>
                <a href="https://www.apaebauru.org.br/" target="_blanck">
                  Acessar
                </a>
              </td>
            </tr>
            <tr>
              <td>Sorri </td>
              <td>Bauru - SP</td>
              <td>
                <a href="https://www.instagram.com/sorribauru/" target="_black">
                  <FaInstagram /> @sorribauru
                </a>
              </td>
              <td>
                <a href="https://sorribauru.com.br/" target="_blanck">
                  Acessar
                </a>
              </td>
            </tr>
            <tr>
              <td>Vila Vicentina </td>
              <td>Bauru - SP</td>
              <td>
                <a
                  href="https://www.instagram.com/vilavicentinabauru/"
                  targer="_blank"
                >
                  <FaInstagram /> @vilavicentinabauru
                </a>
              </td>
              <td>
                <a href="https://vilavicentinabauru.com.br/" target="_blanck">
                  Acessar
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <Footer />
    </div>
  );
}
