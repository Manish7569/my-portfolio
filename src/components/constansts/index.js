import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  python,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  PepsiCo,
  cyient,
  ucmFitness,
  captiongenerator,
  interviewchatbot,
  e_collegemngmt,
  seatbelt,
  threejs,
} from '../../assets';


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
    title: "Full Stack Developer",
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
    title: "Software Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "redux",
    icon: redux,
  },
];

const experiences = [
  {
    title: "Python Developer - Data Engineering",
    company_name: "PepsiCo",
    icon: PepsiCo,
    iconBg: "#383E56",
    date: "Jan 2025 - Present",
    points: [
      "Built scalable, Kubernetes-native backend systems using Python, Flask, Django, and Golang, reducing data retrieval latency by 35% while supporting real-time data exchange across core business units.",
      "Developed RESTful APIs and automated data pipelines with Python (Pandas, NumPy), increasing reporting accuracy by 25% and reducing manual reporting workload by 40%.",
      "Leveraged AWS (S3, Lambda, CloudWatch) and containerized services using Docker, implementing CI/CD pipelines via GitHub Actions and Jenkins for efficient, reliable deployments.",
      "Participating in code reviews and providing constructive feedback to other developers. Integrated Prometheus and Grafana for system monitoring and alerting, proactively optimizing performance and ensuring system reliability across distributed microservices.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "cyient",
    icon: cyient,
    iconBg: "#383E56",
    date: "June 2022 - December 2023",
    points: [
      "Designed and developed a scalable MIS platform to streamline enterprise reporting, utilizing React.js (with TypeScript, hooks, Material UI) for responsive, maintainable user interfaces and reducing front-end development time by 20%.",
      "Built and optimized RESTful APIs using Node.js, Express.js, and Flask, supporting real-time tracking modules and improving dashboard performance by 30% through API optimization and efficient rendering.",
      "Integrated MySQL and MongoDB for efficient data management, deploying containerized microservices via Docker and AWS to enhance scalability and simplify environment management.",
      "Delivered 3+ features per sprint in Agile workflows, ensuring 100% on-time delivery while collaborating closely with designers, QA, and product owners, and maintaining application stability with Postman, Jest, and React Testing Library.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Manish delivered clean Python and Flask code, automated our data pipelines, and saved the team 20+ hours weekly. His attention to detail and ownership made him our go-to for complex backend tasks",
    name: "Bhargav Kumar",
    designation: "Manager",
    company: "PepsiCo",
    image: "https://imgs.search.brave.com/CvYn2DhDZGxKZ5gNA4FVdIcm6Afc9JY71wR-rjGkz6E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oZWxp/b3MtaS5tYXNoYWJs/ZS5jb20vaW1hZ2Vy/eS9hcnRpY2xlcy8w/NzdyRmZYTVRVandw/WXpBRGlWMFo1eS9p/bWFnZXMtMTUuZmls/bC5zaXplXzIwMDB4/MTExMS52MTYxMTcw/NjQ4Ny5wbmc",
  },
  {
    testimonial:
      "Manish improved our dashboard load time by 30% by optimizing React and Node.js code. He delivers high-quality features on time and is quick to learn and adapt.",
    name: "Sita Ram",
    designation: "Manager",
    company: "Cyient",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Working with Manish was a great experience. He proactively helped debug complex issues and maintained clean, consistent code across the team. His positive attitude kept us motivated during tight deadlines.",
    name: "Vignesh Chary",
    designation: "Team Lead",
    company: "Cyient",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "UCM Fitness Web Platform",
    description:
      "Web-based platform that allows users to search, book, and manage fitness classes from various providers, providing a convenient and efficient solution for fitness needs.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "white-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: ucmFitness,
    source_code_link: "https://github.com/",
  },
  {
    name: "Seat Belt Violation Detection System",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Haar Cascade",
        color: "white-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "Image Processing",
        color: "pink-text-gradient",
      },
    ],
    image: seatbelt,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-College Management Platform",
    description:
      "Web application that enables users to manage their college activities, including course registration, grade tracking, and communication with instructors.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensor Flow",
        color: "white-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: e_collegemngmt,
    source_code_link: "https://github.com/",
  },
  {
    name: "AI Interview Chatbot",
    description:
      "Web application that simulates real interview scenarios, allowing users to practice their interview skills and receive feedback.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "white-text-gradient",
      },
      {
        name: "Web Speech API",
        color: "green-text-gradient",
      },
      {
        name: "Open AI API",
        color: "pink-text-gradient",
      },
    ],
    image: interviewchatbot,
    source_code_link: "https://github.com/",
  },
  {
    name: "Image Caption Generator",
    description:
      "A deep learning model that generates captions for images, enabling better accessibility and understanding of visual content.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "white-text-gradient",
      },
      {
        name: "LSTM",
        color: "green-text-gradient",
      },
            {
        name: "CNN",
        color: "pink-text-gradient",
      },
    ],
    image: captiongenerator,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
