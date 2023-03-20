import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Android Developer",
    icon: mobile,
  }
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
 
];


const projects = [
  {
    name: "FolioBin",
    description:
      "A portfolio application, developed using React framework and Firebase. Users can build their own portfolio by entering their details. Additionally, the details can be updated or deleted as and when required.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/kishor-17",
  },
  {
    name: "NextBeat",
    description:
      "A music recommender system, developed in Python. It can classify a song into genres and detect emotion from an audio and play a related song using ML algorithms such as KNN, MLP Classifier with different activation functions(Re-Lu , tanh, logistics), based on the emotion detected.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/kishor-17",
  },
  {
    name: "Spark-Share",
    description:
      "A peer to peer file sharing application, developed in Python using socket programming. A medium for peers to access and share multimedia files. The architecture used here is Centralized Directory architecture.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/kishor-17",
  },
];

export { services, technologies, projects };
