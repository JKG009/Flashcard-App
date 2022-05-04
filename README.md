# Flashcard-App
A basic app that allows you to create and save flashcards for studying.

### Project description
This project was made using HTML, CSS and Javascript using React and its hooks (useState, useEffect, useContext) and also styled-components.
Utilizing local storage to save the topics and flashcards for those topics.

### How to use
`Create a new topic/flashcard`
 - Click the "Make Cards" button in the header
 - Then select the topic you want to make a new flashcard for OR create a new topic
 - Fill in the question and answer input
 - Click the "Add Question" button in the footer

`Using the flashcard`
 - Select the topic you wish to study using the "Select Your Topic" input
 - Click on the card to flip it
 - Move onto the previous/next question using the "Previous Question"/"Next Question" button in the footer OR by clicking the carousel dots underneath the cards

`Deleting a topic/flashcard`
 - To delete a topic and associated flashcards, select the topic you want to delete in the "Select Your Topic" input and click the "x" button on its right
 - To delete a flashcard, flip over to the answer side of the flashcard you wish to remove and click the "x" on the top right corner

### How to run
This project was made using create-react-app. You will need to run it on your localhost using npm start

### Misc Information
This is my first solo project which gave me a chance to learn how to use React and its hooks better.
I struggled at remember things I've learnt about Javascript and so I made this flashcard app to aid me in remembering Javascript array methods and their uses such as .map() and .filter().
There are times where there is a noticeable issue with the words on the flashcard where they are either not loaded properly or are upside down for awhile. This is due to the words not being given enough time to render properly before the "flip" of the card. It is small issue and therefore I did not fix it as I wished to move on from the project.
