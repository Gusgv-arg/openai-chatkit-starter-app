import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "¿Quién es el fundador de Gus-Tech?",
    prompt: "¿Quién es el fundador de Gus-Tech?",
    icon: "circle-question",
  },
  {
    label: "¿En qué se especializan?",
    prompt: "¿En qué se especializan?",
    icon: "circle-question",
  },
  {
    label: "¿Que podría implementar en mi negocio?",
    prompt: "¿Que podría implementar en mi negocio?",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Hacé tu pregunta...";

export const GREETING = "¡Hola, soy el asistente de IA de Gus-tech 👋! ¿Cómo te puedo ayudar?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
