
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import siwachLogo from "../assets/company/siwach.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI-Powered Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Integration Specialist",
    icon: creator,
  },
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
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Drive Coordinator",
    company_name: "T&P Cell, GJUST Hisar",
    icon: siwachLogo,
    iconBg: "#383E56",
    date: "2023 - 2024",
    points: [
      "Led placement coordination activities for 500+ students across multiple engineering disciplines.",
      "Organized technical workshops and industry interaction sessions with leading companies.",
      "Developed automated systems for student data management and placement tracking.",
      "Collaborated with HR teams from top-tier companies to facilitate campus recruitment drives.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Hitesh's AI-powered solutions transformed our business operations. His technical expertise and innovative approach are exceptional.",
    name: "Priya Sharma",
    designation: "Product Manager",
    company: "TechCorp Solutions",
    image: firstTestimonial,
  },
  {
    testimonial:
      "Working with Hitesh was a game-changer. His ability to integrate AI into our existing systems exceeded all expectations.",
    name: "Rajesh Kumar",
    designation: "CTO",
    company: "InnovateTech",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Hitesh delivered a sophisticated e-commerce platform that perfectly balanced functionality with user experience. Highly recommended!",
    name: "Sarah Johnson",
    designation: "Founder",
    company: "Digital Ventures",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Siwach Enterprises",
    description:
      "Full-featured e-commerce platform with secure payments, inventory management, and admin dashboard. Built with modern React architecture and integrated with Stripe for seamless transactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "blue-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/zues13bhai/siwach-interprices",
    live_demo_link: "https://siwachenterprices.netlify.app",
  },
  {
    name: "AI Resume Builder",
    description:
      "ATS-optimized resume builder powered by OpenAI API. Features intelligent content suggestions, multiple templates, and real-time optimization for applicant tracking systems.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/zues13bhai/resumebuilderai",
    live_demo_link: "https://ats-resumebuilder-1.netlify.app",
  },
  {
    name: "Smart Chatbot",
    description:
      "Intelligent conversational AI chatbot with natural language processing capabilities. Built with Python FastAPI backend and React frontend for seamless user interactions.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/zues13bhai/siwach-chatbot",
    live_demo_link: "https://dummychatbot.netlify.app",
  },
  {
    name: "AI Assistant App",
    description:
      "Advanced AI assistant application with real-time communication, task automation, and intelligent responses. Features WebSocket integration and MongoDB for data persistence.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "websocket",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "blue-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/zues13bhai/ai-assistant",
    live_demo_link: "https://hitesh-ai.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
