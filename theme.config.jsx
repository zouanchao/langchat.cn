import DocsLayout from "./pages/layout";

export default {
  logo: <b>LangChat</b>,
  project: {
    link: "https://github.com/langchat",
  },
  footer: false,
  darkMode: true,
  feedback: false,
  editLink: false,
  navbar: {
    component: <DocsLayout />,
  },

  // ... other theme options
};
