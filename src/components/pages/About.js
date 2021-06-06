import React from "react";

import styled from "styled-components";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import BreadCrumb from "components/atoms/BreadCrumb";
import TrafficImage from "stories/assets/traffic.jpg";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";
import Card, { CardMedia, CardMediaDescription } from "components/atoms/Card";

import AboutImage from "draws/About";
import InstImage1 from "assets/instructors/inst1.jpg";
import InstImage2 from "assets/instructors/inst2.jpg";
import InstImage3 from "assets/instructors/inst3.jpg";
import InstImage4 from "assets/instructors/inst4.jpg";
import InstImage5 from "assets/instructors/inst5.jpg";
import InstImage6 from "assets/instructors/inst6.jpg";

const ContainerImage = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const instructors = [
  { id: 1, name: "Thor", avatar: InstImage1 },
  { id: 2, name: "Mel", avatar: InstImage2 },
  { id: 3, name: "Bolinha", avatar: InstImage3 },
  { id: 4, name: "Mike", avatar: InstImage4 },
  { id: 5, name: "Emmy", avatar: InstImage5 },
  { id: 6, name: "Bob", avatar: InstImage6 },
];

const items = [
  { label: "Início", link: "/" },
  { label: "Sobre", link: "" },
];

const About = () => {
  return (
    <>
      <Hero image={TrafficImage}>
        <Heading>
          <h1>Auto Escola Nardini</h1>
        </Heading>
        <BreadCrumb items={items} />
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
              Fugiat quam molestias ad minima, et ab inventore possimus
              cupiditate sed vel, voluptates distinctio sunt rerum officia
              maiores nisi rem dignissimos atque!
            </p>
            <p>
              Possimus, asperiores tempore. A ipsam vero, deserunt corrupti
              necessitatibus ratione iste voluptatem temporibus, laudantium
              corporis nihil reprehenderit aliquam ex maiores iure quos,
              adipisci enim explicabo cumque quidem pariatur saepe voluptates!
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
              ipsa accusantium accusamus molestiae illum quod deleniti nemo ad
              sed tenetur. Nesciunt, quia fugit. Corporis excepturi aliquid
              sapiente maxime beatae ducimus?
            </p>
          </div>
          <div>
            <h4>Visão</h4>
            <p>
              Corporis in nulla doloremque veniam molestiae et? Fuga neque
              libero dolorem! Dignissimos eveniet laboriosam ipsum, ab facilis
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
        <Grid sm={2} md={3} lg={4}>
          {instructors.map((instructor) => (
            <Card key={instructor.id}>
              <CardMedia image={instructor.avatar}>
                <CardMediaDescription>
                  <h5>{instructor.name}</h5>
                </CardMediaDescription>
              </CardMedia>
            </Card>
          ))}
        </Grid>
      </Section>
      <Footer></Footer>
    </>
  );
};

export default About;
