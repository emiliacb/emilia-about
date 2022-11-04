/* Dependencies */
import { marked } from "marked";

/* Markdown files */
import experienceEn from "./markdown/experience_en.md?raw";
import experienceEs from "./markdown/experience_es.md?raw";
import educationEn from "./markdown/education_en.md?raw";
import educationEs from "./markdown/education_es.md?raw";
import projectsEn from "./markdown/projects_en.md?raw";
import projectsEs from "./markdown/projects_es.md?raw";
import informationEn from "./markdown/information_en.md?raw";
import informationEs from "./markdown/information_es.md?raw";

const markdown = {
  experienceEn: marked.parse(experienceEn),
  experienceEs: marked.parse(experienceEs),
  educationEn: marked.parse(educationEn),
  educationEs: marked.parse(educationEs),
  projectsEn: marked.parse(projectsEn),
  projectsEs: marked.parse(projectsEs),
  informationEn: marked.parse(informationEn),
  informationEs: marked.parse(informationEs),
};

const contents = {
  en: {
    header: {
      languageIcon: "/ES",
      languageLabel: "Change language to english",
      languageFeedback: "Now the language is english",
      darkModeLabel: "Toggle dark theme",
    },
    nav: {
      motionReduced: "Activate animations",
      motionFull: "Deactivate animations",
      motionReducedFeedback: "Done! Now we have less animations",
      motionFullFeedback: "Done! The animations are back",
      goTo: "Skip to",
    },
    experience: {
      title: "Experience",
      id: "experience",
      text: markdown.experienceEn,
    },
    education: {
      title: "Education",
      id: "education",
      text: markdown.educationEn,
    },
    projects: {
      title: "Projects",
      id: "projects",
      text: markdown.projectsEn,
    },
    information: {
      title: "Aditional information",
      id: "information",
      text: markdown.informationEn,
    },
  },
  es: {
    header: {
      languageIcon: "/EN",
      languageLabel: "Cambiar lenguaje a español",
      languageFeedback: "Ahora el lenguaje es español",
      darkModeLabel: "Cambiar tema oscuro",
    },
    nav: {
      motionFull: "Activar animaciones",
      motionReduced: "Desactivar animaciones",
      motionReducedFeedback: "Listo! Ahora hay menos animaciones",
      motionFullFeedback: "Listo! Volvieron las animaciones",
      goTo: "Saltar a",
    },
    experience: {
      title: "Experiencia",
      id: "experience",
      text: markdown.experienceEs,
    },
    education: {
      title: "Educación",
      id: "education",
      text: markdown.educationEs,
    },
    projects: {
      title: "Proyectos",
      id: "projects",
      text: markdown.projectsEs,
    },
    information: {
      title: "Información adicional",
      id: "information",
      text: markdown.informationEs,
    },
  },
};

export default contents;
