import React from "react";
import Section from "./Section";
import Heading from "./Heading";

const RoadMap = () => {
  return (
    <Section className="oveflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="What are we working on?" />
        <div
          className="relative grid gap-6 md:grid-cols-2
        md:gap-4 md:pb-[7rem]"
        >
          {roadmap}
        </div>
      </div>
    </Section>
  );
};

export default RoadMap;
