import React from "react";
import clsx from "clsx";
import Markdown from "markdown-to-jsx";

import styles from "./ContributionList.module.css";

const {
  contributions,
} = require("../../../static/collaborationsData/collabList.json");

const Contribution = ({ data }) => {
  const { title, description, sourceLink, demoLink, pageLink } = data;
  return (
    <section
      className={clsx(styles.contributionCard, "shadow--lw margin-bottom--md")}
    >
      <div className={"card"}>
        <div className={clsx("card__header", styles.header)}>
          <h2>{title}</h2>
          <div>
            {sourceLink && (
              <a
                className={clsx(
                  "button button--link padding--none margin-right--md"
                )}
                href={sourceLink}
                target="_blank"
              >
                Source
              </a>
            )}

            {demoLink && (
              <a
                className={clsx(
                  "button button--link padding--none margin-right--md"
                )}
                href={demoLink}
                target="_blank"
              >
                Demo
              </a>
            )}
          </div>
        </div>
        <div className="card__body">
          <Markdown options={{ forceBlock: true }}>{description}</Markdown>
        </div>
        <div className="card__footer">
          {pageLink && (
            <a
              className={clsx("button button--link", styles.readMore)}
              href={pageLink}
              target="_blank"
            >
              Read more
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

const ContributionList = () => {
  return (
    <>
      <header
        className={clsx("padding--md margin-bottom--md", styles.pageHeader)}
      >
        <h1 className={clsx("margin-bottom--none")}>Contributions</h1>
      </header>
      <div className={clsx(styles.contributionList, "padding--md")}>
        {contributions.map((item) => {
          return <Contribution key={item.title} data={item} />;
        })}
      </div>
    </>
  );
};

export default ContributionList;
