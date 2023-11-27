# tv-shows

- [Prerequisites](#prerequisites)
- [Technologies](#technologies)
- [Setup](#setup)


## Prerequisites
Download Node.js at https://nodejs.org/en/download/ (latest version - contains npm)

## Technologies
Here you can see the tech stack used to develop this project

### Main stack
- HTML
- Sass
- ECMAScript 6 (ES6)
- Vue



Below I show you the packages I developed the application with:

- Vue (v3.3.4) - chosen vue3 with composition api as a new feature of Vue
- HTTP client: Axios - library for making HTTP requests
- Unit testing: Vitest - the unit test are not complete, will have to explore them
- Routes management: VueRouter - used to navigate through dashboard
- Store management: Pinia (v2.1.7) - store management where saved the global state
- Components design: Bootstrap  (v5.0.0) - used for styling application
- Preprocessor: Sass (scss) - used sass as CSS preprocessor because of it features 
- Code formatters: ES-Linter + Prettier

### Api
TV shows API: http://www.tvmaze.com/api



## Project Setup
To run this project you need 
- Node (v18.16.1)
- Npm  (9.5.1)

Then clone the repository:
```
git clone https://github.com/Nelida27/tv-shows
```

Enter the project directory 

```sh
cd tv-shows
```

To install dependencies and start working on the project run:

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

