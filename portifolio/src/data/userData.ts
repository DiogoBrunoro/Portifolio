import type { User } from "../Types/userType";
import profileImg from "../assets/profile.jpeg";
import curriculo from "../assets/curriculo.pdf"

export const userData: User = {
    name: "Diogo Brunoro",
    img: profileImg,
    desc: "user.desc",
    emailName: 'diogocaribebrunoro@gmail.com',
    linkedinName: 'Diogo Brunoro',
    githubName: 'DiogoBrunoro',
    links: {
        github: "https://github.com/Diogo Brunoro",
        linkedin: "https://www.linkedin.com/in/diogo-brunoro-577704312/",
        email: "diogocaribebrunoro@gmail.com"
    },
    telefone: "+5573999347071",
    curriculo,
    caracteristicas: [
        "user.fullstack",
        "user.backend",
        "user.ai",
        "user.software"
    ]
}