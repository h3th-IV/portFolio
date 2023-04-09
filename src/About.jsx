import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import useNav from "./useNav";

function About() {
  const { navValue } = useNav(true);
  return (
    <div className="About">
      <Header navValue={navValue} />
      <h1>About</h1>
      <p>
        Hello, my name is Onifade Titilope Chisom. I am currently studying at
        Lagos State University, where I am pursuing a degree in Computer
        Science. I have developed a strong foundation in programming languages
        such as JavaScript and Python
      </p>
      <p>
        In my previous work experience, I interned with HNG where I gained
        practical experience in software development and project management. I
        was responsible for writing code for various projects and collaborating
        with a team to ensure that projects were completed on time and to the
        highest quality.
      </p>
      <p>
        I am very interested in pursuing a career in the technology industry and
        am excited to continue learning and growing as a professional. I am a
        proactive and detail-oriented individual, with excellent problem-solving
        and communication skills. I am confident that my education, experience,
        and skills make me well-suited for a career in the technology industry,
        and I am eager to contribute to the success of a company.
      </p>

      <h1>Languages & tools</h1>
      <p>
        Here are some of the tools and technologies I have worked with over the
        past year; majorly or not (in no particular order):
      </p>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind</li>
        <li>JavaScript</li>
        <li>React js</li>
        <li>Next js</li>
        <li>Git</li>
      </ul>
      <Footer navValue={navValue} />
    </div>
  );
}

export default About;
