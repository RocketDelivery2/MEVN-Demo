<template>
  <div class="about">
    <div class="container">
      <section class="section">
        <h1 class="title">About</h1>
        <p>
         MEVN Demo
A Vue + Bulma demo project showcasing a clean UI, client-side architecture, and a practical build/development workflow.

Tech Stack
Frontend: Vue.js
UI: Bulma
HTTP: Axios
Tooling: Webpack (vue-templates/webpack style), Babel
Styling: Sass
Prerequisites
Node.js (LTS recommended)
npm
Install
npm install
Run Locally (Development)
Starts the dev server with hot reload (commonly on http://localhost:8080):

npm run dev
Build
Production build:

npm run build
(Optional) build + bundle analyzer report:

npm run build --report
Notes / Commands Used in Setup
These are some packages/scripts that have been used in the project setup (helpful if you’re troubleshooting missing dependencies):

npm install --save-dev typescript ts-loader
npm install --save-dev webpack-dev-server
npm install bulma
npm install axios@0.25.0 --save
npm install prettier -D --save-exact
npm install --save-dev @babel/core
npm run build-bulma
npm install sass sass-loader style-loader --save-dev
Docs
For more details on the underlying template/tooling:

Guide: http://vuejs-templates.github.io/webpack/
vue-loader docs: http://vuejs.github.io/vue-loader/
About
My name is Christopher Peterson. I’m a full-stack software engineer focused on delivering polished UI/UX experiences along with reliable backend systems.

MERN demo: (Todo)
React demo: (Todo)
GitHub: https://github.com/RocketDelivery2/
LinkedIn: https://www.linkedin.com/in/christopher-peterson-2ba8243b6/
Email: codingcowboy2026@gmail.com
Phone: (517) 719-0029
References / Credits
https://www.udemy.com/
https://bulma.io/
https://www.lipsum.com/
https://unsplash.com/photos/cloudy-sky-at-daytime-v9bnfMCyKbg
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@use "../assets/mediaQuery.scss";
</style>
