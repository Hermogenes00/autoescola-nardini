import React from "react";
import Button from "../atoms/Button";
import Grid from "../atoms/Grid";
import Feature from "../atoms/Feature";
import Hero from "../molecules/Hero";
import Heading from "../atoms/Heading";
import trafficImage from "../../assets/traffic.jpg";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";
import Section from "components/molecules/Section";

const Home = () => (
  <>
    <Hero image={trafficImage}>
      <Heading>
        <h1>
          Ganhe sua <strong>liberdade</strong> de ir e vir
        </h1>
      </Heading>

      <ul>
        <li>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
          officiis
        </li>
        <li>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
          officiis
        </li>
        <li>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
          officiis
        </li>
      </ul>
      <Button variant="outlined" color="primary">
        Matricule-se agora
      </Button>
    </Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Maior e melhor frota">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
        </Feature>
        <Feature icon={<FaKey />} title="Habilitação mais rápida">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Excelente localização">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
        </Feature>
      </Grid>
    </Section>
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
