module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "list",
        name: "category",
        message: "Choose category?",
        choices: [
          { name: "elements", value: "elements" },
          { name: "layouts", value: "layouts" },
          { name: "parts", value: "parts" },
        ],
      },
      {
        type: "input",
        name: "name",
        message: "What is your component name? (e.g. Button)",
      },
    ],
    actions: (data) => {
      const actions = [];

      actions.push({
        type: "add",
        path: "../src/lib/components/{{category}}/{{pascalCase name}}/index.tsx",
        templateFile: "./templates/components/index.tsx.hbs",
      });

      actions.push({
        type: "add",
        path: "../src/lib/components/{{category}}/{{pascalCase name}}/index.stories.tsx",
        templateFile: "./templates/components/index.stories.tsx.hbs",
      });

      return actions;
    },
  });
};
