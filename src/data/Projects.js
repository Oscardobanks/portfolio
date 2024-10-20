import kodecampx from "/assets/images/projects/KodeCampX.png";
import exclusive from "/assets/images/projects/Exclusive.png";
import todolist from "/assets/images/projects/Todolist.png";
import digitalProjects from "/assets/images/projects/Digital Projects.png";
import multistepSignup from "/assets/images/projects/auth Dashboard.png";
import react from "/assets/icons/React.svg";
import redux from "/assets/icons/Redux.svg";
import css from "/assets/icons/CSS3.svg";
import tailwindcss from "/assets/icons/Tailwind CSS.svg";
import firebase from "/assets/icons/Firebase.svg";
import nextjs from "/assets/icons/Next.js.svg";

export const projects = [
  {
    id: 0,
    title: "KodeCampX",
    description:
      "The primary aim of Kodecamp X is to empower individuals to learn at their own pace, making high-quality tech education more accessible and personalized through Kodecamp by offering schedulable self-paced courses that can span weeks or even months.",
    image: kodecampx,
    link: "https://x-project-fe-nine.vercel.app/",
    technologies: [
      {
        id: 0,
        name: "React",
        icon: react,
        link: "https://reactjs.org/",
      },
      {
        id: 1,
        name: "Redux",
        icon: redux,
        link: "https://redux.js.org/",
      },
      {
        id: 2,
        name: "Tailwind CSS",
        icon: tailwindcss,
        link: "https://tailwindcss.com/",
      },
      {
        id: 3,
        name: "CSS",
        icon: css,
        link: "https://www.css.com/",
      },
      {
        id: 4,
        name: "Firebase",
        icon: firebase,
        link: "https://firebase.google.com/",
      },
    ],
  },
  {
    id: 1,
    title: "Exclusive",
    description:
      "This e-commerce website, offers a user-friendly shopping experience with Firebase authentication.  The dashboard displays static product items, allowing users to seamlessly add and remove items from both their shopping cart and wishlist.",
    image: exclusive,
    link: "https://react-ecommerce-sage.vercel.app/",
    technologies: [
      {
        id: 0,
        name: "React",
        icon: react,
        link: "https://reactjs.org/",
      },
      {
        id: 1,
        name: "Tailwind CSS",
        icon: tailwindcss,
        link: "https://tailwindcss.com/",
      },
      {
        id: 2,
        name: "CSS",
        icon: css,
        link: "https://www.css.com/",
      },
      {
        id: 3,
        name: "Firebase",
        icon: firebase,
        link: "https://firebase.google.com/",
      },
    ],
  },
  {
    id: 2,
    title: "Todolist",
    description:
      "This project is a server-side rendered (SSR) Next.js application. Users can create, read, update, and delete (CRUD) to-do items. Each to-do can be marked as complete. The application provides a clean and responsive user interface for managing a personal to-do list.",
    image: todolist,
    link: "https://ssr-nextjs-todolist.vercel.app/",
    technologies: [
      {
        id: 0,
        name: "Next.js",
        icon: nextjs,
        link: "https://nextjs.org/",
      },
      {
        id: 1,
        name: "Tailwind CSS",
        icon: tailwindcss,
        link: "https://tailwindcss.com/",
      },
      {
        id: 2,
        name: "CSS",
        icon: css,
        link: "https://www.css.com/",
      },
    ],
  },
  {
    id: 3,
    title: "Digital Projects",
    description:
      "This project is a single-page React application featuring a static homepage and utilizes React Router for navigation through the different pages. The project prioritizes a simple, yet effective, presentation of information.",
    image: digitalProjects,
    link: "https://architect-website-kx7brqn10-taku-precious-tokes-projects.vercel.app/",
    technologies: [
      {
        id: 0,
        name: "React",
        icon: react,
        link: "https://reactjs.org/",
      },
      {
        id: 1,
        name: "Tailwind CSS",
        icon: tailwindcss,
        link: "https://tailwindcss.com/",
      },
      {
        id: 2,
        name: "CSS",
        icon: css,
        link: "https://www.css.com/",
      },
    ],
  },
  {
    id: 4,
    title: "Multi Step Resgistration",
    description:
      "This multi-step registration application uses React.js for the front-end and Firebase for secure user authentication. It features a static dashboard accessible after successful registration. The registration process guides users through multiple steps to complete their profile.",
    image: multistepSignup,
    link: "https://user-authentication-dashboard.vercel.app/",
    technologies: [
      {
        id: 0,
        name: "React",
        icon: react,
        link: "https://reactjs.org/",
      },
      {
        id: 1,
        name: "Tailwind CSS",
        icon: tailwindcss,
        link: "https://tailwindcss.com/",
      },
      {
        id: 2,
        name: "CSS",
        icon: css,
        link: "https://www.css.com/",
      },
      {
        id: 3,
        name: "Firebase",
        icon: firebase,
        link: "https://firebase.google.com/",
      },
    ],
  },
];
