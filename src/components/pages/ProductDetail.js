import React from "react";
import ProductType from "models/types/ProductType";
import BreadCrumb from "components/atoms/BreadCrumb";
import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import TrafficImage from "stories/assets/traffic.jpg";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import Callout, {
  CalloutBody,
  CalloutActions,
  CalloutMedia,
} from "components/atoms/Callout";
import Button from "components/atoms/Button";

import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";
import SpeedImage from "draws/Speed";
import styled from "styled-components";

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const ProductDetail = ({ product }) => {
  return (
    <>
      <Hero image={TrafficImage}>
        <Heading>
          <h1>{product.title}</h1>
        </Heading>
        <BreadCrumb
          items={[
            { label: "Início", link: "/" },
            { label: "Serviços" },
            { label: product.title },
          ]}
        />
      </Hero>
      <Section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          architecto laboriosam praesentium atque voluptas sunt nam quo
          excepturi nostrum! Ullam id, magnam ab facere reprehenderit ipsa
          mollitia aliquid ut ipsam!
        </p>
        <p>
          Dicta, dolor praesentium sint ea fugiat nam, ex iusto eveniet rem quae
          labore. Repellendus vero sunt dicta aspernatur eius omnis obcaecati
          reprehenderit perferendis quod ipsum. Eius, ut nihil? Magni, alias!
        </p>
        <p>
          Pariatur quaerat architecto aut libero. Perspiciatis accusamus magnam
          iusto? Possimus velit consequatur doloribus ea quae at totam deleniti
          natus incidunt nemo, corporis laborum officia in suscipit temporibus
          vero aperiam dolor!
        </p>
        <h5>Documentos necessários:</h5>
        <PinnedList>
          <PinnedItem>
            <FaIdCard /> RG
          </PinnedItem>
          <PinnedItem>
            <FaIdCard />
            CPF
          </PinnedItem>
          <PinnedItem>
            <FaScroll />
            Certidão de Nascimento/Casamento
          </PinnedItem>
          <PinnedItem>
            <FaHome />
            Comprovante de residência
          </PinnedItem>
        </PinnedList>
      </Section>
      <Section inverse>
        <Callout>
          <CalloutBody>
            <h6>Faça sua matrícula agora mesmo</h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
              numquam deserunt commodi dolorem, nihil alias debitis labore
              explicabo qui deleniti tenetur obcaecati distinctio repellat
              aspernatur voluptatum quae natus, beatae nulla?
            </p>
            <CalloutActions>
              <Button color="primary">Matricular</Button>
            </CalloutActions>
          </CalloutBody>
          <CalloutMedia>
            <SpeedImage />
          </CalloutMedia>
        </Callout>
      </Section>
      <Footer />
    </>
  );
};

ProductDetail.defaultProps = {
  product: {},
};

ProductDetail.prototypes = {
  product: ProductType,
};

export default ProductDetail;
