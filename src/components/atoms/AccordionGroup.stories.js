import React from "react";
import AccordionGroup from "./Accordion/AccordionGroup";
import Accordion from "./Accordion/Accordion";
export default {
  title: "Components/Atoms/AccordionGroup",
  component: AccordionGroup,
};

export const usage = () => (
  <AccordionGroup>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eos fugiat
      ullam dignissimos a ad quos repudiandae. Dolor, ullam error. Rem optio
      doloribus necessitatibus ea possimus earum recusandae velit! Porro.
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eos fugiat
      ullam dignissimos a ad quos repudiandae. Dolor, ullam error. Rem optio
      doloribus necessitatibus ea possimus earum recusandae velit! Porro.
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eos fugiat
      ullam dignissimos a ad quos repudiandae. Dolor, ullam error. Rem optio
      doloribus necessitatibus ea possimus earum recusandae velit! Porro.
    </Accordion>
  </AccordionGroup>
);
