# RocketElevatorsMobile

For CodeBoxx's week 14 of the Odyssey program, we had to create a mobile app to interact with the Rocket Elevators database. I chose to use Expo and React Native to create this app.

This app uses the react-navigation/stack and react-navigation/native libraries to handle rendering different pages. The pages are loaded into the stackNavigator file which is then returned in the App.js. The SignIn page is the first in the stack, so it is shown first. To log in, a valid employee email must be entered, otherwise an alert is triggered. Once signed in, a list of all Inactive and Intervention elevators is displayed. One of these elevators can be selected, and another view will show with the id, status, and serial number of the elevator. Clicking the red change status button will change the status and the button to green, as well as changing the status to active and the button will link back to the elevator list Home page. On returning to the elevator list page, the API will update the page and remove the previously changed elevator.

The app can be seen by accessing this link and scanning the QR code shown:

https://expo.io/@acltearr/projects/RocketElevatorsMobile
