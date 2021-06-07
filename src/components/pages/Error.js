import React from "react";
import PropTypes from "prop-types";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";
import styled from "styled-components";
import Section from "components/molecules/Section";
import Button from "components/atoms/Button";
import { Link } from "react-router-dom";

const ImageContainer = styled.div`
  text-align: right;
  svg {
    width: 100%;
    height: auto;
    max-width: 400px;
  }
`;

const ErrorTitle = styled.h1`
  margin-top: 0;
`;

const ErrorMessage = styled.p`
  margin: 24px 0;
  font-size: 1.2rem;
`;

const Error = ({ image, title, description }) => (
  <Section>
    <Grid sm={2}>
      <div>
        <Heading>
          <ErrorTitle>{title}</ErrorTitle>
        </Heading>
        <ErrorMessage>{description}</ErrorMessage>
        <Button as={Link} to="/" color="primary">
          Ir para a página inicial
        </Button>
      </div>
      <div>
        <ImageContainer>{image}</ImageContainer>
      </div>
    </Grid>
  </Section>
);

Error.defaultProps = {
  image: undefined,
  titulo: "",
  description: "",
};

Error.propTypes = {
  image: PropTypes.node,
  titulo: PropTypes.string,
  description: PropTypes.string,
};

export default Error;
