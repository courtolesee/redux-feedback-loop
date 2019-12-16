# Prime Feedback Redux Loop

## Description

Duration: Weekend Challenge for Trifid Week 12

This project was created to capture student daily feedback in a multi-part form, including: "How are you feeling today?", "How well are you understanding the content?", "How well are you being supported?", and "Any comments you want to leave?" The next buttons route the user to the next form, so long as each form is completed (not including comments). The user then reviews their feedback before hitting submit. Submit send the feedback data to the server to be saved in the database for Prime staff to view. The user can then start over and submit new feedback if they'd like. 

## Built With
- React
- Redux

## Installation
- npm install
- npm run server
- npm run client
- use the data.sql file to create a database called "prime_feedback" with Postico

## Usage

Click "Start my feedback!" to start. Choose an a number 1-5 (1 is low feeling, understanding, support; 5 is high) for the first three form components. Leave comments on the fourth component if you wish (not required). Reveiw your feedback, and hit submit to send it to the Prime staff. Leave additional feedback with a fresh feedback form if you'd like. 