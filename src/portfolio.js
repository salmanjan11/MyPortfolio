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
  username: "Salman Jan",
  title: "Hi all, I'm Salman",
  subTitle: emoji(
    "A passionate Computer Engineer, exploring the wonders of Artificial Intelligence, Machine Learning, and Deep Learning. Concurrently, exploring IoTS and Cyber Security. Ready to explore the tech world with me?"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1IkC_OxcQpvQWDPJ_gcFHtagxO6IS8KW4/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/salmanjan11",
  linkedin: "https://www.linkedin.com/in/salman-jan-81900057/",
  gmail: "salmanjan.ipb@gmail.com",
  //gitlab: "https://gitlab.com/salmanjan11",
  //facebook: "https://www.facebook.com/salmanjan11",
  //medium: "https://medium.com/@",
  //stackoverflow: "https://stackoverflow.com/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AN AI & DEEP LEARNING ENTHUSIAST WHO IS EXPLORING MORE OF THE ARTIFICIAL INTELLIGENT WORLD",
  skills: [
    emoji(
      "⚡ Develop ML & DL algorithms for Classification Tasks"
    ),
    emoji(
      "⚡ Develop tools and apps that uses AI & DL algorithms"
    ),
    emoji("⚡ Using DL algorithms in Healthcare")//,
    //emoji("⚡")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "AI",
      fontAwesomeClassname: "fas fa-microchip"
    }, 
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-c"
    },
    {
      skillName: "Terminal",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Stack Overflow",
      fontAwesomeClassname: "fab fa-stack-overflow"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "R Project",
      fontAwesomeClassname: "fab fa-r-project"
    }

    //<i class="fa-solid fa-code"></i>
   //<i class="fa-solid fa-terminal"></i>
   //<i class="fa-brands fa-github"></i>
   // <i class="fa-brands fa-stack-overflow"></i>
   //<i class="fa-brands fa-unity"></i>
   //<i class="fa-brands fa-r-project"></i>
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Brescia",
      logo: require("./assets/images/unibs.png"),
      subHeader: "Master in Telecommunications and Multimedia",
      duration: "September 2020 - October 2023",
      desc: "My culminating research endeavor centered on the segmentation of brain tumours through the application of advanced Deep Learning Techniques",
      descBullets: [
        "Specialized in remote sensing with a focus on deep learning and machine learning applications.",
        "Developed expertise in Network Security, Information Theory, Digital Multimedia Channel Communications, Health Information Systems, and Wireless Communications.",
        "Equipped with a diverse skill set for effective navigation and contribution to contemporary telecommunications."
      ]
    },
    {
      schoolName: "Polytechnic Institute of Bragança ",
      logo: require("./assets/images/IPB.png"),
      subHeader: "Master in Informatics",
      duration: "September 2021 - October 2022",
      desc: "Studied in IPB for 2 semester, which gave me the oppurtunity to study different courses in the field of Informatics",
      descBullets: [
        //"I was an exchange student in IPB on Erasmus Plus Program" 
        "Studied diverse Informatics courses at Polytechnic Institute of Bragança (IPB).",
        "Studied Internet of Things (IoT) and Intelligent Systems, gaining foundational knowledge in AI, Deep Learning, and Machine Learning.",
        "Explored Advanced Computing with a focus on parallel programming.",
        "Covered Computer Systems Security and completed a comprehensive Software Development course for a holistic understanding of Informatics."
      ]
    },
    {
      schoolName: "University of Engineering and Technology, Peshawar",
      logo: require("./assets/images/UET.png"),
      subHeader: "Bachelor of Science in Computer Systems Engineering",
      duration: "September 2013 - October 2017",
      desc: "Ranked top 10% in the program.",
      descBullets: ["Completed foundational courses in Computer Programming and Object-Oriented Programming.",
      "Advanced studies in Software Engineering, Operating Systems, and Computer Organization.",
      "Explored Web Development, Database Management Systems, and Signal and Systems.",
      "Specialized in Computer Security, Digital System Design, and Game Development.",
      "Acquired a diverse skill set with a focus on programming and proficiency in various areas."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Designing", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    }

  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Co-Founder",
      company: "Dots Studio",
      companylogo: require("./assets/images/dotsstudio.png"),
      date: "Jan 2019 – Sept 2020",
      desc: "My primariy focus was on developing comprehensive mobile games for both iOS and Android platforms",
      descBullets: [
        //"My main responsibilities centered around user interface (UI) design and front-end development."
      ]
    },
    {
      role: "Front-End Developer",
      company: "PLC Group",
      companylogo: require("./assets/images/PLC.png"),
      date: "Dec 2017 – Sept 2018",
      desc: "Designing of User-Interface of Website and Applications."
    },
    {
      role: "Intern",
      company: "Alliance Health Care",
      companylogo: require("./assets/images/AHL.png"),
      date: "July 2016 – Sep 2016",
      desc: "During my IT internship, I played a crucial role in overseeing operations, particularly focusing on maintaining the organization's website."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.l",
      event_url: "https://www.facebook.com//"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+393517892015",
  email_address: "salmanjan.ipb@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  isHireable
};
