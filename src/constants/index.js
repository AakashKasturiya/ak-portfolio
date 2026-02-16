import {

  mobile,
  backend,
  creator,
  web,

  figma,
  html,
  css,
  javascript,
  typescript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  git,
  daisyuiLogo,
  gemini,
  youtube,
  qrcode,
  json,

  reactBootstrap,

  merittoLogo,
  infinityLogo,
  singleinterfaceLogo,

  work1,
  work2,
  work3,
  work4,
  work5,
  work6,
  work7,
  work8,
  work9,

  LinkedInProfile,
  YoutubeProfile,
  LinkedInPost,

} from "./imageUrl";


export const navLinks = [{
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

const services = [{
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologiesDesktop = [

 
 {
    name: "git",
    icon: git,
  },
   {
    name: "figma",
    icon: figma,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
 
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "daisyUI",
    icon: daisyuiLogo,

  },
    {
    name: "react bootstrap",
    icon: reactBootstrap,
  },
 

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "HTML 5",
    icon: html,
  }
];

const technologiesMobile = [
  {
    name: "MongoDB",
    icon: mongodb,
  },
 
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "HTML 5",
    icon: html,
  }
];

const experiences = [

  {
    title: "Frontend Developer",
    company_name: "SingleInterface",
    icon: singleinterfaceLogo,
    iconBg: "#0d006d",
    date: "Jun 2023 - Present",
    points: [
      "Converted Figma designs into responsive and visually accurate HTML/CSS and React components.",
      "Integrated dynamic functionality using Laravel PHP on the backend and connected front-end views via APIs.",
      "Created email templates and dynamic mailers for transactional and marketing purposes.",
      "Collaborated closely with backend developers to fetch, display, and manipulate data effectively.",
      "Handled API integrations, debugging, and data-binding to build fully functional user interfaces."


    ],
  },
  {
    title: "Software Engineer - Frontend",
    company_name: "Infinity Soft Systems",
    icon: infinityLogo,
    iconBg: "#ffffff",
    date: "Jan 2023 - Jun 2023",
    website: "https://www.infinitysoftsystems.com/",
    linkedin: "",
    points: [
      "Translated Figma designs into responsive and pixel-perfect HTML, CSS, and React components.",
      "Developed and maintained scalable front-end features using modern JavaScript and React.js.",
      "Collaborated with UI/UX designers to implement clean, user-friendly interfaces.",
      "Ensured cross-browser compatibility, performance optimization, and responsive design."
    ],
  },
  {
    title: "Jr. Developer",
    company_name: "Meritto (Formerly NoPaperForms)",
    icon: merittoLogo,
    iconBg: "#e4e4e4",
    date: "Sep 2020 - Dec 2022",
    website: "https://www.infinitysoftsystems.com/",
    linkedin: "",
    points: [
      "Developed responsive landing pages and UI components using HTML, CSS, and JavaScript.",
      "Implemented lead-capturing widgets to enhance conversion and client acquisition.",
      "Created dynamic PDF documents for internal documentation and client deliverables.",
      "Ensured all web assets were optimized for performance, accessibility, and cross-browser compatibility."
    ],
  },

];

const testimonials = [{
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [{
    image: work1,
    title: "Gemini AI Clone",
    desc: "The Gemini AI Clone is a sleek and modern conversational AI interface inspired by Google’s Gemini experience...",
    tech: [reactjs, tailwind, gemini],
    link: "https://gemini-ak.netlify.app/"
  },
  {
    image: work2,
    title: "Modern Text Editor",
    desc: "Welcome to the Modern Text Editor! This is a fully-featured editor where you can format text.",
    tech: [reactjs, redux, tailwind, javascript],
    link: "https://text-decoration.netlify.app/"
  },
  {
    image: work3,
    title: "YouTube Clone",
    desc: "YouTube Clone is a responsive web application that mimics core features of YouTube, including video browsing, searching, and playback.",
    tech: [reactjs, css, youtube],
    link: "https://youtube-ak.netlify.app/"
  },
  {
    image: work4,
    title: "QR Code Generator App",
    desc: "QR Code Generator is a simple and powerful app that lets you create custom QR codes in seconds. Whether it's a website URL, contact info, Wi-Fi credentials, or more.",
    tech: [reactjs, daisyuiLogo, tailwind, qrcode],
    link: "https://qr-code-generator-ak-app.netlify.app/"
  },
  {
    image: work5,
    title: "Spotify a Music App",
    desc: "Music streaming platform with playlist creation, artist discovery, and personalized recommendations.",
    tech: [reactjs, tailwind, json],
    link: "https://spotify-web-ak.netlify.app/"
  },
  {
    image: work6,
    title: "Modern Notepad App",
    desc: "This is your personal notepad application. You can add, edit, delete, and search notes. Try adding a new note.",
    tech: [reactjs, daisyuiLogo, tailwind],
    link: "https://ak-notepad.netlify.app/"
  },
    {
    image: work7,
    title: "Dice Game",
    desc: "A Dice Rolling Game built with ReactJS and Styled-Components!",
    tech: [reactjs, tailwind],
    link: "https://rolling-dice-ak.netlify.app/"
  },
    {
    image: work8,
    title: "HuntryHub",
    desc: "HuntryHub, a modern and responsive food recipe app built using ReactJS, TailwindCSS, and Redux Toolkit.",
    tech: [reactjs, tailwind, redux, json],
    link: "https://akhuntryhub.netlify.app/"
  },
    {
    image: work9,
    title: "Shopfinity",
    desc: "A dynamic and scalable eCommerce web application built with ReactJS, Redux Toolkit, and TailwindCSS, powered by a free public API",
    tech: [reactjs, daisyuiLogo, tailwind, redux, json],
    link: "https://shopfinity-ak.netlify.app/"
  },

];

const socialMedia = [{
    LinkedInProfile: LinkedInProfile,
    userName: "Aakash Kasturiya",
    connection: "15k LinkedIn Family 😎",
    videosCount: `100+ videos`,
    description: `Frontend Developer | ReactJs | JavaScript | SASS`,
    posts: [{
        text: " How can you add an element to an object using Spread Operator in Javascript❓",
        img: "https://media.licdn.com/dms/image/v2/D5622AQGxjXP-SSGWkA/feedshare-shrink_800/B56ZYaSahpGoAg-/0/1744197762616?e=1751500800&v=beta&t=RwFtNadSXSqe4F3CEfI9Qo6GHAWZWO7K-GtMwtUkndk",
        like: 115,
        time: "1 week",
        comment: 20,
      },
      {
        text: "Celebrating the colors of joy and togetherness at our office SingleInterface Holi bash! 🌸🎉 ",
        img: LinkedInPost,
        like: 120,
        time: "2 mo",
        comment: 10,
      },
      {
        text: "Web development can be likened to the human body---- 🤖 where each part has its own role in creating a seamless experience ",
        img: "https://media.licdn.com/dms/image/v2/D5622AQHf4UPid04ytg/feedshare-shrink_800/B56ZVu5zZdHQAg-/0/1741322402874?e=1751500800&v=beta&t=Mn9brxpPYx25-XXL9dSOEHAwLcfu1RVvbU47_yv4hKw",
        like: 100,
        time: "2 mo",
        comment: 5,
      },
      {
        text: "🚀 Goodbye Create-React-App, Hello Next.js and Beyond! 🚀 As web development continues to evolve, it's exciting to witness",
        img: "https://media.licdn.com/dms/image/v2/D5622AQGNMrarmrxLJQ/feedshare-shrink_800/B56ZTBQ3.UHEAg-/0/1738409216858?e=1751500800&v=beta&t=sHtkODRDNvY3s5gnBJVlv1uaHQX8YccezpIEHSpZQRA",
        like: 5,
        time: "3 mo",
        comment: 5,
      }
    ]

  },

  {
    YoutubeProfile: YoutubeProfile,
    userName: "Aakash Kasturiya",
    subscribers: "5.5k",
    videosCount: `100+ videos`,
    description: `I am a guy who loves traveling, exploring new places, vlogging
                  about my daily life, and sharing my opinions. You'll love my
                  content if you're into long-form travel vlogs.`,
    videos: [{
        thumb: "https://i.ytimg.com/vi/OrhefGo8-r8/hqdefault.jpg",
        title: "Exploring Neelkanth Temple & Rafting in Rishikesh 🚣🏻 🔥 | Sunset at Triveni Ghat | Vlog 105 | Part-2",
        views: "7.5K views",
        time: "1 week ago",
        duration: "27:42",
        link: "https://youtu.be/OrhefGo8-r8",
      },
      {
        thumb: "https://i.ytimg.com/vi/JDbQd-23_-0/hqdefault.jpg",
        title: "Birthday Par Bike Gift Milli 😱🎉 | Vlog 84 | Hunter 350 | Surprise Birthday Gift",
        views: "8.2K views",
        time: "1 month ago",
        duration: "17:25",
        link: "https://youtu.be/JDbQd-23_-0",
      },
      {
        thumb: "https://i.ytimg.com/vi/ETX78FvVyJE/hqdefault.jpg",
        title: "Holi Celebration with Office Colleagues 🥰 | Vlog 65 | SingleInterface",
        views: "12.7K views",
        time: "4 months ago",
        duration: "17:26",
        link: "https://youtu.be/ETX78FvVyJE",
      },
      {
        thumb: "https://i.ytimg.com/vi/nuJC4MgLL6s/hqdefault.jpg",
        title: "VARANASI 2 Days Trip | Vlog 60 | Part 1 | Kashi | Ganga Aarti | Ghat | Tour Plan",
        views: "15.3K views",
        time: "6 months ago",
        duration: "22:08",
        link: "https://youtu.be/nuJC4MgLL6s",
      },
    ]
  }
]

export {
  services,
  technologiesDesktop,
  technologiesMobile,
  experiences,
  testimonials,
  projects,
  socialMedia,
};