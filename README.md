# assignment-vue

![alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGmUav4XCpZdfDU2lJqSlTRsA1daMrRA1egA&usqp=CAU)


Opdracht
Maak een simpele front-end voor de back-end Laravel applicatie.
Je mag de laravel applicatie als API koppelen of direct Vue integreren als front-end.

Eindproduct:
- Laat alle data zien van de Laravel applicatie
- Zorg dat je naast het laten zien van data, het ook mogelijk is om minstens één item te muteren.

# Uitleg

## Welke tools worden er gebruikt?

| Tool | Website | Waarvoor? |
|---|---|---|
| Vite | https://vitejs.dev/ | Build tooling
| Composition API | https://v3.vuejs.org/guide/ | Vue API
| Vue Router 4 | https://next.router.vuejs.org/ | Routing
| TailwindCSS | https://tailwindcss.com/ | Styling

## Hoe krijg ik het aan de praat?
```bash
git clone git@github.com:apostledev/assignment-vue.git
cd assignment-vue
npm install
npm run dev
```
**Belangrijk: de frontend verwacht dat de Laravel API wordt gehost op 'http://localhost:8000/' indien dit niet het geval is kun je dit aanpassen op regel 3 in `src/Fragments/useJsonFetch.ts`**