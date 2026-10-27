# Personal page – Yuk Sui Man

Portfolio-site gebouwd met **Vue 3**, **Vite** en **Tailwind CSS**.

## Starten

```bash
npm install
npm run dev      # lokale ontwikkelserver op http://localhost:5173
npm run build    # productiebuild in dist/
npm run preview  # build lokaal bekijken
```

## Inhoud aanpassen

Alle tekst (profiel, uitgelicht project, ervaring, projecten, vaardigheden, opleiding) staat in
[`src/data/cv.js`](src/data/cv.js). De profielfoto staat in `src/assets/profile.jpg`.

## Structuur

```
src/
  App.vue                  # volgorde van de secties
  data/cv.js               # alle cv-inhoud
  directives/reveal.js     # scroll-animaties (v-reveal)
  components/
    NavBar.vue             # navigatie + licht/donker thema
    HeroSection.vue        # intro, foto, typ-effect
    FeaturedProject.vue    # uitgelicht project
    RelayDiagram.vue       # interactief verbindingsschema
    ExperienceSection.vue  # tijdlijn werkervaring
    ProjectsSection.vue
    SkillsSection.vue
    EducationSection.vue
    ContactSection.vue
```
