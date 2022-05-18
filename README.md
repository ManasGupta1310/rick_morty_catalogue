# Rick and Morty Catalogue
This application is a catalogue for locations of the famous cartoon show Rick and Morty. The application is a SPA (Single Page Application) made on React framework with TypeScript using the [Rick and Morty API](https://rickandmortyapi.com/). The application is deployed on heroku [here](http://rickmorty-catalogue.herokuapp.com/)
<p align="center">
<img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-moon-mod-download-35.png" width="200" alt="rick and morty portal moon mod download"/>
</p>

## Table of Content
- [Framework and libraries](https://github.com/ManasGupta1310/rick_morty_catalogue#framework-and-libraries)
- [User features of application](https://github.com/ManasGupta1310/rick_morty_catalogue#user-features-of-the-appication)
- [System features of application](https://github.com/ManasGupta1310/rick_morty_catalogue#system-features-of-the-application)
- [Filter Results Flow](https://github.com/ManasGupta1310/rick_morty_catalogue#filter-results-flow)
- [Zustand Flow](https://github.com/ManasGupta1310/rick_morty_catalogue#zustand-flow)
- [Axios Requests](https://github.com/ManasGupta1310/rick_morty_catalogue#axios-requests)
- [Deployment on Heroku](https://github.com/ManasGupta1310/rick_morty_catalogue#deployment-on-heroku)

## Framework and libraries
The application uses the following frameworks and libraries:
- React with TypeScript
- MaterialUI
- Zustand
- ESLint
- Axios

### React
<p align="center">
  <img src="https://img.icons8.com/color/480/000000/react-native.png" height="200" width="200"/>
</p>
<b>React</b> is a library building for user interfaces with simple states and declarations. React makes it easier to declare and create standalone components for each part of our application and join together these components to create complex UIs. We can easily pass different props into the components to pass data and use states in our components to make store data which may change over time or not. React makes use of render which displays content on virtual DOM rather on actual DOM and hence, is faster in processing changes in displays. It keeps the UI in sync in virtual memory and displays it when the rendering of component is requested.

### MaterialUI
<p align="center">
  <img src="https://img.icons8.com/color/480/000000/material-ui.png" height="200" width="200"/>
</p>
<b>MaterialUI</b> is a UI library for React with comprehensive features making it easier to use components and customise them using easy and user-friendly syntax. It is widely accessible and easy-to-use. Using these components help us make beautiful UIs with sophisticated theme.

### Zustand

<p align="center">
  <img src="https://github.com/pmndrs/zustand/blob/main/bear.jpg" height="200" />
</p>
<b>Zustand</b> is a small and efficient state-management system with easy-to-use syntax and hooks and APIs. No providers are needed and the hooks can be added anywhere. Initialising the states is easier and managing them in the application is not complicated unlike other state-management libraries. It usesless boilerplate and renders only on changes.

### ESLint

<p align="center">
  <img src="https://cdn.freebiesupply.com/logos/large/2x/eslint-1-logo-png-transparent.png" height="200" width="250"/>
</p>
<b>ESLint</b> is a code analysis tool for identifying irregular patterns in JS or TS code. It also automatically fixes the issues and we can also add custom parsers to our linter. We can also write our own rules for the linting to check our code.

### Axios
<b>Axios</b> helps make XMLHttpRequests to the server from browser or simple http request from node. It helps intercept requests and transform requests and their content. It also supports the Promise API and can also cancel requests.


## User Features of the appication:
- Display all the locations in alphabetical order.
- Filter all the locations by two parameters ( by loaction type or location dimension ).
- Each parameter displays its options in alphabetical order.<b> "None" refers to all the locations.</b>
- Filter locations using search key. <b> Empty search key refers to all the locations.</b>
- Each location is displayed with its name, type and dimension.
- Each location tile links to the location page which displays all the characters in that location.
- Each character tile links to the page which shows the information about that character.

## System features of the application:
- React for SPA as it has better performance and simplicity. It makes use of virtual DOM and hence the performance. Since the application uses filter hence we would have to display different content or component depending on the filter hence, comes the virtual DOM  in React to advantage.
- Typescript is used to specifically decalare the variable type and analyse the errors while writing code. Interfaces are used for states and parameters to declare the types.
- ESLint with the airbnb config is used to maintain regularity in the code.
- Zustand is used to store the locations and character info in corresponding states.
- Axios is used to process API and http requests.

## Filter results flow
The applications filters the locations displayed on basis of type, dimension and search key.  The logic of filtering is written in [filter.tsx](https://github.com/ManasGupta1310/rick_morty_catalogue/blob/main/src/components/utils/filter.tsx) which is a stateless component. It uses the <b>filter</b> function and locations, type, dimension and search key are passed to the function as parameters and no state is used inside the filter.
- Locations are stored in a temporary array <b>filteredResults</b>.
- If type is not empty then filters the filteredResults with locations whose type equals to the type parameter else keeps the array unchanged.
- If dimension is not empty then filters the filteredResults with locations whose dimension equals to the dimension parameter else keeps the array unchanged.
- If search key is not empty then filters the filteredResults with locations whose name contains the search Key parameter else keeps the array unchanged.
- Returns the filtered results.
- The filtered results are displayed on state change.
## Zustand Flow
- Gets locations from the [Rick and Morty locations API](https://rickandmortyapi.com/api/location) and loops through all the pages using the <b>getLocations()</b> function in Zustand store and stores all the locations in <b>locations</b> state in our zustand store. It also sets <b>locationsLoad</b> state to true which controls whether circular loader renders or not.
- <b>getLocation</b> function retrieves a location from the API with a specific Id and stores it in the <b>location</b> state setting the <b>locationLoad</b> to true to stop the circular loader from rendering.
- <b>getCharacter</b> function retrives the info about a character with a specific Id from the API and stores it in the <b>character</b> state and sets the <b>characterLoad</b> to true.

Using the zustand store, the application stores all tbe states containing major data at one place to use it in different levels of our SPA.  It helps to use locations and character at different levels of the application witout worrying for the flow of those states between the levels.

## Axios requests
Using axios,
- for getting locations  we make request to the [Rick and Morty locations API](https://rickandmortyapi.com/api/location). Since the API for the locations is paginated, we iterate through all the pages (for eg.https://rickandmortyapi.com/api/location?page=2) and first store all the locations in one sinfgle array then set locations state to that array.
- for getting a single location we make request to the locations API with id as a parameter (for eg. https://rickandmortyapi.com/api/location/1 returns location with id 1).
- for getting character info we make request to the character API with id as a parameter (for eg. https://rickandmortyapi.com/api/character/1 returns character with id 1)

## Deployment on heroku
The application has been deployed on heroku using the React buildpack. Due to some problem with heroku, the application may load a bit slower and sometimes throws an application error. In such case please reload the application website. 
<br>
The deployed application can be found [here](http://rickmorty-catalogue.herokuapp.com)
