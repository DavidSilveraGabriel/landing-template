# Astro Starter Kit: Basics

```mermaid
flowchart TD
    subgraph Inicia Conversación y Prepara n8n
        AA[Inicio Conversación Typebot] --> AB[Input Usuario Nombre, primer mensaje];
        AB --> AC[Set Variable mensaje_a_enviar = input_usuario ];
    end

    AC --> A[HTTP Request to n8n];
    
    A --> B[Set Variable total_mensajes];

    B --> C{total_mensajes >= 1};
    C --True--> D[Set Variable mensaje_bot_1];
    D --> E[Bubble: mensaje_bot_1];
    
    C --False--> Z[User Input];

    E --> F{total_mensajes >= 2};
    F --True--> G[Set Variable mensaje_bot_2];
    G --> H[Bubble: mensaje_bot_2];
    F --False--> Z;

    H --> I{total_mensajes >= 3};
    I --True--> J[Set Variable mensaje_bot_3];
    J --> K[Bubble: mensaje_bot_3];
    I --False--> Z;

    K --> L{total_mensajes >= 4};
    L --True--> M[Set Variable mensaje_bot_4];
    M --> N[Bubble: mensaje_bot_4];
    L --False--> Z;
    
    N --> Z;
```

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
