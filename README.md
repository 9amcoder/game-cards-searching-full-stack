# Magic Card Search App

Welcome to the Magic Card Search App! This is a full-stack web application that allows you to search for Magic cards and retrieve information about them from the Scryfall API. The application is built with Express.js as the backend and Create React App as the frontend. It provides a user-friendly interface for searching, filtering, and displaying Magic cards.

## Functionality

### Backend (Node and Express)
- The backend of this application is built using Node.js and Express.
- It features a single REST endpoint that retrieves a list of Magic cards from the Scryfall API based on a search string provided by the client.
- Reference to the Scryfall API: https://scryfall.com/docs/api/cards/search
### Frontend
- The frontend consists of a user-friendly web interface created with Create React App.
- Users can input a card name into the search bar to initiate the search.
- The search is performed in real-time without the need for the user to click a separate button.
- Rate limiting is implemented to ensure that a user cannot submit more than one API request per second using the search bar.
- Card results are displayed in an aesthetically pleasing and responsive manner.

## Features

- **Real-time Search**: As you type a card name in the search bar, the application instantly fetches and displays relevant cards.

- **User-Friendly Display**: The card results are presented in a user-friendly manner, including the card's image(s), name, set name, number, and rarity.

- **Filtering and Sorting**: The application provides options to filter and sort the card results to help you find the specific card you're looking for.

- **TypeScript/ES6 Knowledge**: The application leverages TypeScript and ES6 features for robust and maintainable code.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: React, Create React App
- **API Integration**: Scryfall API
- **Testing**: Jest (for testing the Node endpoint)
- **Styling**: CSS for an aesthetically pleasing design
- **Responsive Design**: The application is responsive, ensuring it looks great on different screen sizes.

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/your/repo.git
```
2. create a .env file on root folder and add the following line to it:
```bash
API_ENDPOINT = https://api.scryfall.com
```

3. Start the project

```bash
npm install 
```
```bash
npm start 
```

### Software design patterns used:
    - MVC
    - Singleton
### Unit test

- Unit test run after the server is started, otherwise the test will fail.

```bash
npm test 
```

### Backend Folder structure:

src/
|-- test/
|   |-- index.test.ts
|-- controllers/
|   |-- cardsController.ts
|-- middlewares/
|   |-- validateQuery.ts
|-- routes/
|   |-- cards.ts
|-- services/
|   |-- cardsService.ts
|-- utils/
|   |-- constants.ts
|-- index.ts

### Third party libraries used:

    "axios": "^1.5.1",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express-validator": "^7.0.1",


### Frontend

- Created a Card component to display the card data

- Created a custom hook useFetchCards to fetch the data from the backend

- The selected code is a custom React Hook named useFetchCards. This hook is designed to fetch card data from an API endpoint and manage the related state.

- The hook takes three parameters: search, page, and order. These parameters are used to customize the API request.

- The hook uses the useState hook from React to create three pieces of state:

- cards: This is an array that will hold the card data fetched from the API. It's initially an empty array.

- isLoading: This is a boolean that indicates whether the data is currently being fetched. It's initially false.

- error: This is a string that will hold any error message that occurs during the fetch. It's initially null
