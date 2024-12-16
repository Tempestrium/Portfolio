import {
  dhvsu,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "extracurricular",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const education = [
  {
    title: "Bachelor of Science in Computer Engineering",
    company_name: "Don Honorio Ventura State University",
    icon: dhvsu,
    iconBg: "#fff",
    date: "2021 - Present",
    points: [
      "Courses undertaken: Data Structures and Algorithms, OOP, Software Design, Web Development, Discrete Mathematics, Computer Architecture, Operating Systems.",
    ],
  },
  {
    title: "Senior High School",
    company_name: "Don Honorio Ventura State University",
    icon: dhvsu,
    iconBg: "#fff",
    date: "2019-2021",
    points: [
      "Science, Technology, Engineering, and Mathematics",
      ,
    ],
  },
];

const extracurricular = [
  {
    title: "Cloud Foundations: A Gateway to Cloud Computing with AWS",
    type: "Webinar Certificate",
    photo: "./src/assets/certs/AWS.png",
  },
  {
    title: "Introduction to Angular",
    type: "Webinar Certificate",
    photo: "./src/assets/certs/angular.png",
  },
  {
    title: "Mastering the Basics of Typescript: A Beginners Guide",
    type: "Webinar Certificate",
    photo: "./src/assets/certs/typecscript.png",
  },
  {
    title: "Building Powerful APIs with Node.js, Prisma, and MySQL",
    type: "Webinar Certificate",
    photo: "./src/assets/certs/API.png",
  },
  {
    title: "Unlocking Potential: Career Paths and Growth in Computer Networking",
    type: "Webinar Certificate",
    photo: "./src/assets/certs/career.png",
  },
  {
    title: "Introduction to Network & System Administration",
    type: "Webinar Certificate",
    photo: "./src/assets/certs/network.png",
  },
];

const projects = [
  {
    name: "Real Time Object Detection for PET Bottles",
    description:
      "A SMART trash bin with real time object detection for PET bottles using the YOLO algorithm for properl waste disposal in Don Honorio Ventura State University.",
    tags: [
      {
        name: "YOLO Algorithm",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Raspberry Pi",
        color: "pink-text-gradient",
      },
      {
        name: "PyTorch",
        color: "green-text-gradient",
      },
    ],
    image: "./src/assets/objdec.png",
  },
  {
    name: "Digital Signal Processing Software",
    description:
      "The software is designed to process digital signals with a variety of functions such as Analog to Digital Conversion, Finite Impulse Response Filter, Moving Average Filter, and Low/High Pass Filter. The result will then be plotted int a  graph",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "digital signal processing",
        color: "green-text-gradient",
      },
      {
        name: "TKinter",
        color: "pink-text-gradient",
      },
    ],
    image: "./src/assets/dsp.png",
    source_code_link: "https://github.com/kiks12/dsp-final",
  },
  {
    name: "Hotel Management System",
    description:
      "A comprehensive hotel management system designed to streamline and automate hotel reservations allowing guests to check room availability, make reservations, and receive confirmation seamlessly.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Database Management",
        color: "green-text-gradient",
      },
      {
        name: "Authentication-Body",
        color: "blue-text-gradient",
      },
    ],
    image: "./src/assets/htlmng.png",
    source_code_link: "https://github.com/SalmonFish12/Hotel-Reservation-System",
  },
  {
    name: "Price Tally",
    description:
      "Price Tally is a budge management app designed for managing daily expenses and savings. With a built in checklist and calculator for easy tracking.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "Budget Management",
        color: "pink-text-gradient",
      },
    ],
    image: "./src/assets/price.png",
    source_code_link: "https://github.com/Tempestrium/money_management_app",
  },
  {
    name: "CofEat Website",
    description:
      "This website is created to provide an online platform for a cafe business called Cofeat, designed to be interactive and user-friendly to showcase the cafe's qualities, offerings, reservations and update with news and promotions.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    image: "./src/assets/cofeat.png",
    source_code_link: "https://github.com/CpECriselle/cofeatwebdev",
  },
];

export {
  extracurricular,
  projects,
  education,
};
