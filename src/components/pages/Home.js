import React from "react";
import { useScrollToTop } from "hooks/scroll";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import Grid from "../atoms/Grid";
import Feature from "../atoms/Feature";
import Accordion, { AccordionGroup } from "components/atoms/Accordion";
import Hero from "../molecules/Hero";
import Heading from "../atoms/Heading";
import trafficImage from "../../assets/traffic.jpg";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";
import Section from "components/molecules/Section";
import AboutVideo from "../../../src/assets/about.mp4";
import Footer from "components/organisms/Footer";
import ProductGrid from "components/organisms/ProductGrid";

const products = [
  {
    id: 1,
    title: "1ª Habilitação Carro e Moto",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: trafficImage,
  },
  {
    id: 2,
    title: "1ª Habilitação Carro",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: trafficImage,
  },
  {
    id: 3,
    title: "1ª Habilitação Moto",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: trafficImage,
  },
  {
    id: 4,
    title: "Mudança de Categoria Caminhão",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: trafficImage,
  },
  {
    id: 5,
    title: "Aulas Avulsas",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: trafficImage,
  },
];

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
      <ProductGrid products={products} />
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
            <Button as={Link} to="/servicos" color="primary">
              Saiba mais
            </Button>
          </div>
        </div>
        <div>
          <video
            src={AboutVideo}
            width="100%"
            autoPlay
            playsInline
            loop
            muted
          />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>

      <AccordionGroup>
        <Accordion title="Como eu renovo minha CNH?">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eos
          fugiat ullam dignissimos a ad quos repudiandae. Dolor, ullam error.
          Rem optio doloribus necessitatibus ea possimus earum recusandae velit!
          Porro.
        </Accordion>
        <Accordion title="Como faço a mudança de categoria?">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eos
          fugiat ullam dignissimos a ad quos repudiandae. Dolor, ullam error.
          Rem optio doloribus necessitatibus ea possimus earum recusandae velit!
          Porro.
        </Accordion>
        <Accordion title="Fui multado, e agora?">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eos
          fugiat ullam dignissimos a ad quos repudiandae. Dolor, ullam error.
          Rem optio doloribus necessitatibus ea possimus earum recusandae velit!
          Porro.
        </Accordion>
      </AccordionGroup>
    </Section>
    <Footer />
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
