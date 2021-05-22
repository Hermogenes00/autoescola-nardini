import React from "react";
import Button from "../atoms/Button";
import Grid from "../atoms/Grid";
import Feature from "../atoms/Feature";
import Hero from "../molecules/Hero";
import Heading from "../atoms/Heading";
import trafficImage from "../../assets/traffic.jpg";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";
import Section from "components/molecules/Section";
import AboutVideo from "../../../src/assets/about.mp4";
import Footer from "components/organisms/Footer";

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
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
      </Heading>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Nardini auto escola</h2>
          </Heading>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            voluptatem itaque libero? Nobis enim nisi accusantium
          </p>
          <div>
            <Button color="primary">Saiba mais</Button>
          </div>
        </div>
        <div>
          <video src={AboutVideo} width="100%" autoPlay loop />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
