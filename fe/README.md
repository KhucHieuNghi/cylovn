# cylovn

Cylo Website ReactJS

preview: https://www.loom.com/share/1c1b823e9fd74113ab12905f35555b35
https://www.canva.com/design/DAFFffHvMRo/T2RUqPPOvLjjOXWFdu-AsA/view

### Run local
Universal: yarn build && yarn start
SSG: yarn export

### Run Docker
docker build -t . cylo-fe && docker run -p 3000:3000 cylo-fe

# Debt Technical
1. Full fill Unitest
2. Responsive

### Prepare
* installs extensions: eslint, es7+ React/Redux..., Sass/Less/Stylus/Pug..., Stylelint, TODO highlight.
* installs: npm install husky --save-dev ------(not)npx husky-init && yarn

### Libraries & Framework
* nextJS v12: https://nextjs.org/docs/getting-started
* react: https://reactjs.org/docs/getting-started.html
* axios: https://github.com/axios/axios
* styled-component: https://styled-components.com/
* scss v1: https://sass-lang.com/guide
* react testing: https://testing-library.com/docs 
* date-time: https://date-fns.org/
* react-query (side effect): https://react-query-v2.tanstack.com/
* zudstan (state management): https://github.com/pmndrs/zustand

### Folder structure
* components: Atomic design (pages, templates, organisms, molecules, atoms ) https://www.linkedin.com/pulse/atomic-design-pattern-shubham-hirap
* pages: https://nextjs.org/docs/basic-features/pages
* hooks: includes: side effect, state management, context page...
* styles: Ui style GLOBAL, SCSS follow architecture https://www.learnhowtoprogram.com/user-interfaces/building-layouts-preprocessors/7-1-sass-architecture
* utils: includes: formatter, transform api, normalize data, constants, types ,...
