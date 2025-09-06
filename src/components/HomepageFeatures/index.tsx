import Heading from "@theme/Heading";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Start Coding From Scratch",
    description: (
      <>
        Learn how to set up a brand new computer for development — from installing editors and Git to running your first program. docs-common
        gives you the foundation every developer needs.
      </>
    ),
  },
  {
    title: "Frontend & Backend Basics",
    description: (
      <>
        Explore the essentials of web development — HTML, CSS, JavaScript, frameworks, APIs, and databases. A single place to build confidence in
        both ends of the stack.
      </>
    ),
  },
  {
    title: "Shared Knowledge Hub",
    description: (
      <>
        Instead of duplicating documentation across projects, link back here. docs-common serves as the reusable source of truth for general
        concepts, guides, and references.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={styles.mx400}>
      <div className="text--center">
        <div className={styles.featureHidden}></div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className={styles.feature}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
