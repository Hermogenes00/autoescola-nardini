import React from "react";

import { text } from "@storybook/addon-knobs";

import Hero from "./Hero";

import automobile from "../stories/assets/automobile.jpg";
import traffic from "../stories/assets/traffic.jpg";
import Heading from "./Heading";

export default {
  title: "Components/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={automobile}>
    <h1>{text("Title", "Ganhe sua liberdade de ir e vir")}</h1>
    <p>{text("Text", "A auto escola lider em aprovação")}</p>
  </Hero>
);

export const withList = () => (
  <Hero image={traffic}>
    <Heading>
      <h1>{text("Title", "Ganhe sua liberdade de ir e vir")}</h1>
    </Heading>

    <ul>
      <li>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi officiis
      </li>
      <li>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi officiis
      </li>
      <li>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi officiis
      </li>
    </ul>
  </Hero>
);
