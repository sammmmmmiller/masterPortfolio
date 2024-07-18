/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sam's Portfolio",
  description:
    "Experienced software engineer with a background in physics and a passion for video games and video game development.",
  og: {
    title: "Samuel Miller Portfolio",
    type: "website",
    url: "http://sammmmmmiller.github.com/",
  },
};

//Home Page
const greeting = {
  title: "Samuel Miller",
  logo_name: "SamMiller",
  // nickname: "layman_brother",
  subTitle:
    "Experienced software engineer with a background in physics and a passion for video games and video game development.",
  resumeLink:
    "https://drive.google.com/file/d/10OeHjdoS2-U-mKKJ4BHmR6XIffuOkEXv/view?usp=drive_link",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/sammmmmmiller",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/sammmmmmiller",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sam-miller-893538160/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:sammiller0025@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

];

const skills = {
  data: [
    
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive web application front ends using React-Redux, Angular, and ASP.NET",
        "⚡ Creating application backends in Node and .NET",
        "⚡ Developing mobile applications using React Native and Unity",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Video Game Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "Emory University",
      subtitle: "Bachelor of Science in Physics",
      logo_path: "emory_logo.png",
      alt_name: "Emory",
      duration: "2017 - 2021",
      descriptions: [
        "• Graduated summa cum laude in 2021 with a BS in physics and a minor in applied mathematics.",
        "• Completed honors thesis in computational biophysics by engineering software for an experimental force spectroscopy instrument with MATLAB.",
        "• Relevant coursework: Computational Physics, Calculus II-IV, Ordinary/Partial Differential Equations, Linear Algebra, Mathematical Modelling, Data Structures and Algorithms, Computer Architecture/Assembler Programming, Database Systems.",
      ],
      website_link: "http://emory.edu",
    },
    {
      title: "Emory University",
      subtitle: "Master of Science in Computer Science",
      logo_path: "emory_logo.png",
      alt_name: "Emory",
      duration: "2022 - 2024",
      descriptions: [
        "• Graduated in 2024 with an MS in computer science.",
        "• Completed honors thesis in HCI by studying modern gaming accessibility systems for the blind and visually impaired. Developed a Python application for generating tactile transcodings of fundamental data visualizations in card games.",
        "• Relevant Coursework: Algorithms, Systems Programming, Computer Networking, Operating Systems, Information Security, Artificial Intelligence.",
      ],
      website_link: "https://www.emory.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  
  
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Stack Software Engineer",
          company: "bSwift",
          company_url: "https://www.bswift.com/",
          logo_path: "bswift.png",
          duration: "February 2022 - October 2023",
          location: "Remote",
          description:
            "●	Developed and maintained new features for bSwift's massive web application in the ASP.NET framework with C# and SQL. Primary backend developer for the new bSwift mobile application. Led REST API development and data integration.",
          color: "#000000",
        },
        {
          title: "Unity Developer",
          company: "BlackSleeve Media",
          company_url: "https://blacksleevemedia.com/",
          logo_path: "blacksleeve.png",
          duration: "March 2021 - February 2022",
          location: "Atlanta, GA",
          description:
            "●	Created the new official companion application to the Netflix show CHEER, available now on iOS and Android. Developed multiple minigames including an endless runner, trivia, and a cheerleading competition engine. Programmed UI, IAP, notification, and authentication systems and integrated app with Google Cloud.",
          color: "#0879bf",
        },
        {
          title: "Data Science Intern",
          company: "Envio Systems",
          company_url: "https://www.linkedin.com/company/envio-systems-inc./?originalSubdomain=de",
          logo_path: "envio.jpg",
          duration: "Summer 2019",
          location: "Berlin, Germany",
          description:
            "●	Developed supervised learning models in Python for the analysis of carbon-dioxide, temperature, and occupancy data in buildings to predict energy levels and improve efficiency.",
          color: "#9b1578",
        },
        
       
      ],
    },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
   
    {
      id: "mdp-diffusion",
      name: "Force Spectroscopy with Electromagnetic Tweezers",
      createdAt: "2021-03-02T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://arxiv.org/abs/2103.02040",
    },
   
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "Working on an interesting project? Send me a message and I'll get back to you within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Atlanta, GA, USA 30329",
    locality: "Atlanta",
    country: "USA",
    region: "Georgia",
    postalCode: "30329",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
