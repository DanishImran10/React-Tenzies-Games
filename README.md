# Tenzies Game

A simple and interactive Tenzies game built with React, where players roll dice to match all values. Only non-selected dice can be rolled again, making it a fun and strategic game.

## Features
- **Dice Selection**: Click on dice to select or deselect them.
- **Random Number Generation**: Dice roll to generate random numbers.
- **State Management**: 
  - Tracks selected and non-selected dice using `useState`.
  - Prevents re-rolling of selected dice.
- **Roll Button**: Roll only non-selected dice with a button handler.
- **Conditional Rendering**: Displays dynamic UI based on game state.
- **Reusable Components**: Dice and other elements implemented as React components.
- **Efficient Rendering**: Uses `.map()` and `.filter()` for rendering and updating dice.
- **Styling**: Vanilla CSS for a clean and responsive design.

## How to Play
1. Roll the dice using the "Roll" button.
2. Click on dice to select the numbers you want to keep.
3. Roll again to match all dice values.
4. Enjoy the game!

## Technologies Used
- **React**:
  - Functional components
  - `useState` for state management
  - Props for component communication
- **CSS**: Vanilla CSS for styling and layout.
- **Netlify**: Deployed for online access.

## Deployed Application
Check out the live version of the game here: [Tenzies Game](https://react-tenzies10.netlify.app/) 