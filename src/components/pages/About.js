import React from "react";
import PropTypes from "prop-types";
import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import TrafficImage from "stories/assets/traffic.jpg";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import AboutImage from "draws/About";
import styled from "styled-components";
import Footer from "components/organisms/Footer";

const ContainerImage = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const About = () => (
  <>
    <Hero image={TrafficImage}>
      <Heading>
        <h1>Auto Escola Nardini</h1>
      </Heading>
    </Hero>
    <Section>
      <Grid md={2}>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa esse
            laudantium deleniti, doloribus ipsum debitis quidem odit facilis
            accusantium quae animi id et aliquid obcaecati quaerat, quam quia
            sapiente qui.
          </p>
          <p>
            Corporis eos excepturi, sapiente sequi magnam quaerat doloribus!
            Fugiat quam molestias ad minima, et ab inventore possimus cupiditate
            sed vel, voluptates distinctio sunt rerum officia maiores nisi rem
            dignissimos atque!
          </p>
          <p>
            Possimus, asperiores tempore. A ipsam vero, deserunt corrupti
            necessitatibus ratione iste voluptatem temporibus, laudantium
            corporis nihil reprehenderit aliquam ex maiores iure quos, adipisci
            enim explicabo cumque quidem pariatur saepe voluptates!
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
          </ul>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            officiis. Eos voluptates, doloremque aut beatae suscipit iste
            corporis, accusantium corrupti vel laudantium sunt porro. Omnis
            labore unde quae qui beatae.
          </p>
          <center>
            <ContainerImage>
              <AboutImage />
            </ContainerImage>
          </center>
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Grid md={2}>
        <div>
          <h4>Missão</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            ipsa accusantium accusamus molestiae illum quod deleniti nemo ad sed
            tenetur. Nesciunt, quia fugit. Corporis excepturi aliquid sapiente
            maxime beatae ducimus?
          </p>
        </div>
        <div>
          <h4>Visão</h4>
          <p>
            Corporis in nulla doloremque veniam molestiae et? Fuga neque libero
            dolorem! Dignissimos eveniet laboriosam ipsum, ab facilis
            accusantium aut magnam earum dolore suscipit illo animi, unde quis
            omnis modi veniam?
          </p>
        </div>
      </Grid>
    </Section>
    <Section>
      <Heading>
        <h2>Conheça nossos professores</h2>
      </Heading>
    </Section>
    <Footer></Footer>
  </>
);

About.defaultProps = {};

About.propTypes = {};

export default About;
