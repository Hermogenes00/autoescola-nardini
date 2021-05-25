import React from "react";
import Card, { CardBody, CardMedia } from "./Card";
import Section from "components/molecules/Section";
import CarImage from "../../stories/assets/card-placeholder.jpg";
import Button from "./Button";
import Heading from "./Heading";

export default {
  title: "Components/Atoms/Card",
  component: Card,
  subcomponents: { CardBody, CardMedia },
};

export const usage = () => (
  <Section inverse>
    <Card>
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
      </CardBody>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div>
        <Button color="primary" variant="link">
          Saiba mais
        </Button>
      </div>
    </Card>
  </Section>
);

export const whitMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={CarImage} />
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
      </CardBody>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div>
        <Button color="primary" variant="link">
          Saiba mais
        </Button>
      </div>
    </Card>
  </Section>
);
