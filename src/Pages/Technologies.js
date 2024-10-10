import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    python,
    pandas,
    seaborn,
    metplotlib,
    scikitlearn,
    ggplot,
    excel,
    vscode,
    restfulapi,
    powerbi,
    Tableausymbol,
    github,
    postman,
    scrapy,
    numpy
  } = techStackDetails;

  const imageSize = "w-16 h-16"; // Define a fixed size for all images

  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={python} title="python" alt="python" className={imageSize} />
        <img src={pandas} title="pandas" alt="pandas" className={imageSize} />
        <img src={numpy} title="numpy" alt="numpy" className={imageSize} />
        <img src={ggplot} title="ggplot" alt="ggplot" className={imageSize} />
        <img src={metplotlib} title="metplotlib" alt="metplotlib" className={imageSize} />
        <img src={scikitlearn} title="scikitlearn" alt="scikitlearn" className={imageSize} />
        <img src={seaborn} title="seaborn" alt="seaborn" className={imageSize} />
        <img src={scrapy} title="scrapy" alt="scrapy" className={imageSize} />
        <img src={powerbi} title="powerbi" alt="powerbi" className={imageSize} />
        <img src={Tableausymbol} title="Tableausymbol" alt="Tableausymbol" className={imageSize} />
        <img src={excel} title="excel" alt="excel" className={imageSize} />


      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="vscode" className={imageSize} />
        <img src={github} title="Github" alt="Github" className={imageSize} />
        <img src={postman} title="Postman" alt="Postman" className={imageSize} />
        <img src={restfulapi} title="restfulapi" alt="respectful" className={imageSize} />

      </section>
    </main>
  );
}

export default Technologies;

