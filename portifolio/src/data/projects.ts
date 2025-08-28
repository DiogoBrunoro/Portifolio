import type { CardType } from "../Types/cardType";
import eliteConstrucoes from "../assets/Elite construções.mp4";
import working from "../assets/working.webp";
import igreja from "../assets/Igreja.png";
import videoIgreja from "../assets/Igreja Vida Nova.mp4";
import portifolio from "../assets/portifolio.png";
import heart from "../assets/heart.png";
import easy from '../assets/easy.png'
import rick from '../assets/rick.png'
import tictactoe from "../assets/tictac.png"

export const projects: CardType[] = [
  {
    id: "1",
    title: "projects.Ajunta.title",
    description: "projects.Ajunta.description",
    languages: [
      "Next.Js",
      "CSS3",
      "TypeScript",
      "GraphQL",
      "Golang",
      "PostgreSQL",
      "Redis",
      "Aws",
      "Docker",
    ],
    type: "projects.types.sites",
    status: "projects.status.inProgress",
    highlight: true,
    image: working,
    date: "",
  },
  {
    id: "2",
    title: "projects.Igreja-Vida-Nova.title",
    description: "projects.Igreja-Vida-Nova.description",
    languages: [
      "React",
      "TypeScript",
      "CSS3",
      "Java",
      "SpringBoot",
      "Docker",
      "MySQL",
    ],
    type: "projects.types.sites",
    status: "projects.status.done",
    highlight: true,
    image: igreja,
    date: "01/06/2025",
    video: videoIgreja,
    gitHubLink: "https://github.com/DiogoBrunoro/Igreja-Vida-Nova"
  },
  {
    id: "3",
    title: "projects.EliteContrucoes.title",
    description: "projects.EliteContrucoes.description",
    languages: ["CSS", "HTML", "JavaScript", "Java", "SpringBoot", "MySQL"],
    type: "projects.types.sites",
    status: "projects.status.done",
    highlight: true,
    image: "https://picsum.photos/seed/habits-app/800/600",
    date: "06/12/2024",
    video: eliteConstrucoes,
  },
  {
    id: "4",
    title: "projects.Portifolio.title",
    description: "projects.Portifolio.description",
    languages: [
      "React",
      "TypeScript",
      "Langchain",
      "Gemini",
      "Python",
      "Fast API",
      "Material UI",
    ],
    type: "projects.types.sites",
    status: "projects.status.done",
    image: portifolio,
    date: "27/08/2025",
  },
  {
    id: "5",
    title: "projects.JavaParking.title",
    description: "projects.JavaParking.description",
    languages: ["Java", "MVC", "JavaSwing"],
    type: "projects.types.apps",
    status: "projects.status.done",
    date: "06/12/2024",
    gitHubLink: "https://github.com/DiogoBrunoro/Java-Parking"
  },
  {
    id: "6",
    title: "projects.HeartBit.title",
    description: "projects.HeartBit.description",
    languages: ["Swift","SwiftUI","Node-Red","Gemini","Charts"],
    type: "projects.types.apps",
    status: "projects.status.done",
    image: heart,
    date: "11/04/2025",
    gitHubLink: "https://github.com/DiogoBrunoro/HeartBit"
  },
  {
    id: "7",
    title: "projects.EasyTraining.title",
    description: "projects.EasyTraining.description",
    languages: ["HTML", "CSS", ".JavaScript"],
    type: "projects.types.sites",
    status: "projects.status.done",
    image: easy,
    date: "30/06/2024",
    siteLink : "https://easy-training-diogobrunoros-projects.vercel.app/",
    gitHubLink : "https://github.com/DiogoBrunoro/Easy-training?tab=readme-ov-file"
  },
  {
    id: "8",
    title: "projects.RickMortyCatalogo.title",
    description: "projects.RickMortyCatalogo.description",
    languages: ["HTML", "JavaScript", "CSS"],
    type: "projects.types.landing",
    status: "projects.status.done",
    image: rick,
    date: "04/06/2024",
    gitHubLink: "https://github.com/DiogoBrunoro/Java-Script"
  },
  {
    id: "9",
    title: "projects.Tic-Tac-Toe.title",
    description: "projects.Tic-Tac-Toe.description",
    languages: ["JavaScript", "HTML", "CSS"],
    type: "projects.types.landing",
    status: "projects.status.done",
    image: tictactoe,
    date: "04/06/2024",
    gitHubLink : "https://github.com/DiogoBrunoro/Java-Script"
  },
];
