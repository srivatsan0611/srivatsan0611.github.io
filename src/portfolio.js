/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Srivatsan Srinivasan",
  title: "Hi all, I'm Srivatsan",
  subTitle: emoji(
    "Software Development (Full-Stack) Engineer at Linarc 🚀 | Skilled in scalable systems, DevOps, and AI/ML Engineering"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1HfhjVeYWx56JBKi6ABePUtkqpwdn4oGH/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/srivatsan0611",
  linkedin: "https://www.linkedin.com/in/srivatsan-srinivasan03/",
  gmail: "srivatsansrinivasan03@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WITH EXPERTISE IN AI/ML AND DEVOPS",
  skills: [
    emoji(
      "⚡ Build scalable full-stack applications with React, Next.js, Node.js, and modern databases"
    ),
    emoji("⚡ Build and optimize AI/ML models using TensorFlow, PyTorch, and LLMs"),
    emoji(
      "⚡ Design CI/CD pipelines and automate workflows with Docker, Kubernetes, and cloud platforms"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Shiv Nadar University, Chennai",
      logo: require("./assets/images/shivNadarUniversityChennaiLogo.jpg"),
      subHeader: "Bachelor of Technology in Artificial Intelligence and Data Science",
      duration: "2021 - 2025",
      desc: "Graduated First Class with Distinction as part of the Founding Batch. GPA: 8.93/10.00",
      descBullets: [
        "Specialized in AI/ML, Full-Stack Development, and Data Engineering",
        "Built production-grade applications and ML models at scale"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Full-Stack Development", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "AI/ML & Data Science",
      progressPercentage: "80%"
    },
    {
      Stack: "DevOps & Cloud",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Engineer",
      company: "Linarc Inc.",
      companylogo: require("./assets/images/linarcLogo.png"),
      date: "October 2025 – Present",
      desc: "Building production-grade scalable applications for Construction Management as part of the Full-Stack team.",
      descBullets: [
        "Owned Egnyte integration enabling forward-compatible data sync for enterprise customers",
        "Built and owned the Marketplace microservice using FastAPI and Redis within a monorepo",
        "Implemented automated database provisioning and migrations for ERP integrations (QBO, QBD, Sage)",
        "Delivered end-to-end features across backend services, admin UI, and system configurations"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Motorq",
      companylogo: require("./assets/images/motorqLogo.png"),
      date: "June 2025 – September 2025",
      desc: "Owned the Infinity internal portal and built scalable systems for operational excellence.",
      descBullets: [
        "Owned the Infinity internal portal, building downtime notifications, CI/CD pipelines (multiple environment handling), and performance optimizations (Next.js + PostgreSQL) for rendering 6M+ records",
        "Improved portal reliability through automated downtime email acknowledgements and deployment-backed testing workflows",
        "Automated alerting via PagerDuty and MonteCarlo APIs, significantly reducing false positives",
        "Resolved 35+ large-scale JIRA issues using Snowflake queries for data-driven debugging"
      ]
    },
    {
      role: "AI Intern - Academic Trainee",
      company: "HCLTech",
      companylogo: require("./assets/images/hclTechLogo.jpg"),
      date: "May 2024 – July 2024",
      desc: "Developed AI models and automated testing solutions for code analysis and quality improvement.",
      descBullets: [
        "Built dataset (1K+ samples) and Few-Shot Llama-3-8b model improving code analysis by 20%",
        "Generated 500+ functional tests via Code-Llama, boosting adherence by 30%"
      ]
    },
    {
      role: "Summer Intern",
      company: "NEC Corporation India Pvt. Ltd.",
      companylogo: require("./assets/images/necLogo.png"),
      date: "May 2023 – July 2023",
      desc: "Created data visualization dashboards and AI-powered document processing tools.",
      descBullets: [
        "Created Tableau BI dashboards synthesizing financial data from disparate Data Sources",
        "Built BART-based Document Summarizer with Flask frontend"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY RECENT PERSONAL PROJECTS",
  projects: [
    {
      image: require("./assets/images/sangeetLogo.jpg"),
      projectName: "Sangeet-V2 - AI Playlist Engine",
      projectDesc: "Full-stack AI-powered music recommendation system using Llama-3 to infer emotional context and genre transitions. Integrated Spotify OAuth and APIs to generate personalized playlists with stateful user interactions",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/srivatsan0611/sangeet-v2"
        }
      ]
    },
    {
      image: require("./assets/images/rateLimiterLogo.jpg"),
      projectName: "Rate Limiter as a Service",
      projectDesc: "Token-bucket rate limiting API with in-memory and Redis storage for distributed usage. Exposed Prometheus metrics and structured log aggregation for observability in production environments",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/srivatsan0611/rate-limiter-as-a-service"
        },
        {
          name: "Live Demo",
          url: "https://rate-limiter-as-a-service.vercel.app"
        }
      ]
    },
    {
      image: require("./assets/images/guardrailsLogo.jpg"),
      projectName: "OpenAI Guardrails JS (Open Source)",
      projectDesc: "Contributed to OpenAI's JavaScript Guardrails SDK by improving guardrail evaluation correctness and type safety. Added defensive runtime and TypeScript validations to prevent silent failures during guard execution",
      footerLink: [
        {
          name: "View PR",
          url: "https://github.com/openai/openai-guardrails-js/pull/51"
        },
        {
          name: "View on GitHub",
          url: "https://github.com/srivatsan0611/openai-guardrails-js"
        }
      ]
    },
    {
      image: require("./assets/images/akinatorLogo.jpg"),
      projectName: "Akinator-LLM",
      projectDesc: "Weekend full-stack project that replicates Akinator's 20-questions game using LLM technology for intelligent question generation and character guessing",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/srivatsan0611/akinator-llm"
        }
      ]
    },
    {
      image: require("./assets/images/staySphereLogo.jpg"),
      projectName: "StaySphere - Hotel Booking App",
      projectDesc: "Full-stack MERN booking platform with authentication, admin panel, dynamic listings, and LLM-powered recommendation engine using booking history",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Surya443/StaySpehere"
        }
      ]
    },
    {
      image: require("./assets/images/urlShortenerLogo.jpg"),
      projectName: "URL Shortener",
      projectDesc: "Production-grade NPM package for one-line URL shortening with analytics & TypeScript support. Reduced integration time from hours to 30s via zero-config shared MongoDB Atlas setup",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/srivatsan0611/url-shortener"
        },
        {
          name: "View on NPM",
          url: "https://www.npmjs.com/package/@srivatsan-dev/url-shortener"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Certifications, Competitive Programming Achievements, and Recognition",

  achievementsCards: [
    {
      title: "NPTEL Social Networks - Top 5% in India",
      subtitle:
        "Scored 86/100 and ranked in the Top 5% nationwide in NPTEL's Social Networks certification course",
      image: require("./assets/images/nptelLogo.jpeg"),
      imageAlt: "NPTEL Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS56S115340508830746597"
        }
      ]
    },
    {
      title: "LeetCode Problem Solver",
      subtitle: "Solved 350+ problems with a rating of 1550 in C++, demonstrating strong algorithmic and data structure skills",
      image: require("./assets/images/leetCodeLogo.png"),
      imageAlt: "LeetCode Logo",
      footerLink: [
        {
          name: "View Profile",
          url: "https://leetcode.com/u/srivatsan0611/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9940209135",
  email_address: "srivatsansrinivasan03@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "vatsandev", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
