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
        Hello, my name is Bonu Samuel Busayo. I am a Backend Engineer experienced 
        in building scalable RESTful APIs and microservices. I hold a Bachelor of Science 
        in Computer Science from Lagos University and am passionate about writing efficient, 
        testable code.
      </p>
      <p>
        I have achieved significant improvements in system performance, including a 40% 
        improvement in server response times and a 35% boost in data retrieval using Go, 
        Node.js, and cloud technologies. My expertise spans across microservices architecture, 
        cloud-native development, and distributed systems design.
      </p>
      <p>
        Currently working as a Backend Engineer at SwiftWings, I develop booking management 
        systems for Flights, Rides, Hotels, and Travel using RESTful APIs. Previously, I 
        worked as a Contract Backend Engineer at Capitalwise Dynamic Pay Limited (Oct 2024 - 
        July 2025), where I architected and built the entire backend infrastructure for a 
        comprehensive finance and loan management system. This system included full customer 
        and staff-side applications with intelligent loan product matching algorithms that 
        analyze credit checks and customer profiles to automatically match customers with 
        appropriate loan products, ensuring optimal loan-to-customer fit and improving 
        approval rates.
      </p>
      <p>
        I've also worked at Skooleo and Phliptech Labs, where I engineered backend solutions 
        for web and mobile applications, built HR systems, and implemented multi-payment 
        gateways.
      </p>
      <p>
        While my primary focus is backend development, I also have experience with front-end 
        technologies, which helps me better understand full-stack application architecture 
        and collaborate effectively with frontend teams to deliver seamless user experiences.
      </p>
      <p>
        Beyond backend engineering, I'm a passionate Linux enthusiast with extensive hands-on 
        experience using Linux as my primary development environment. My DevOps expertise includes 
        containerization with Docker and Kubernetes, infrastructure as code with Terraform and 
        Ansible, and automated CI/CD pipelines that streamline deployment workflows. I also have 
        experience in cybersecurity and penetration testing, which informs my approach to building 
        secure, resilient systems from the ground up.
      </p>

      <h1>Languages & tools</h1>
      <p>
        Here are some of the tools and technologies I have worked with (in no particular order):
      </p>

      <ul>
        <li>Golang (Go)</li>
        <li>Python</li>
        <li>Node.js / TypeScript</li>
        <li>Express.js</li>
        <li>Gin & GorillaMux</li>
        <li>gRPC</li>
        <li>PostgreSQL & MySQL</li>
        <li>MongoDB</li>
        <li>AWS, GCP, Azure</li>
        <li>Docker & Kubernetes</li>
        <li>Terraform & Ansible</li>
        <li>CI/CD (Jenkins, CircleCI, GitHub Actions)</li>
        <li>Kafka</li>
        <li>REST, GraphQL, WebSockets</li>
        <li>Linux Systems Administration</li>
        <li>Cybersecurity & Penetration Testing</li>
        <li>Git & GitHub</li>
      </ul>
      <Footer navValue={navValue} />
    </div>
  );
}

export default About;
