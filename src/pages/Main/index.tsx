import React from "react";
import Authors from "../../components/Authors";
import Carrossel from "../../components/Carrossel";
import Header from "../../components/Header";
import MoreViews from "../../components/MoreViews";
import {
  Container,
  ContainerMoreViews,
  ContainerSlider,
  Content,
} from "./styles";

const Principal: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <ContainerSlider>
            <Carrossel />
          </ContainerSlider>
          <ContainerMoreViews>
            <MoreViews />
          </ContainerMoreViews>
        </Content>
        <Authors />
      </Container>
    </>
  );
};

export default Principal;
