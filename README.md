<p  align="center">
<img src="./assets/spring_onion_splash3.png" width="200" height="200" alt="Logo"></img>
<br />
<br />

<img  alt="Version"  src="https://img.shields.io/badge/version-1.0.0-brightgreen.svg?style=for-the-badge"  />

<img  alt="Version"  src="https://img.shields.io/badge/contributors-5-brightgreen?style=for-the-badge"  />

<img  alt="Version"  src="https://img.shields.io/badge/Maintained%3F-no-brightgreen?style=for-the-badge"  />

<img  alt="Version"  src="https://img.shields.io/badge/last_commit-march-brightgreen?style=for-the-badge"  />

<img  alt="Version"  src="https://img.shields.io/badge/react_native-0.64-brightgreen?style=for-the-badge"  />

<img  alt="Version"  src="https://img.shields.io/badge/yarn-1.22.10-brightgreen?style=for-the-badge"  />


## About

Spring Onion is a mobile app on iOS and Android that allow users to be able to calculate the carbon footprint of car journeys.

All you need to know is your licence plate and the distance travelled and the app returns the amount of CO2 consumed, as well as other regular activities that consume a similar amount of CO2 for comparison. If you'd like to donate to offset your carbon emissions, you can follow a link to our chosen environmental organisation where a one-off payment can be made.

This project was built in the final two weeks at Makers Academy. We used React Native to create an E2E mobile app experience for the user. Our app is a one stop shop for environmentally conscious users that are looking to limit their contribution to global warming, no matter how small.

No further development is planned for the app.

## Demo with screenshots

<figure style="margin: auto; layout: flex; flex-direction: row;">
<figcaption>Once the app has loaded, the user is prompted to input information about their car journey:</figcaption><br>
<br>
<img src="assets/screenshots/HomeScreen.png" alt="home screen on loading" width="150" >
</figure>

<figure style="margin: auto;">
<figcaption>The user fills in the licence plate and distance travelled (and can toggle between km and miles): </figcaption><br>
<br>
<img src="assets/screenshots/HomeScreenEntry.png" alt="home screen filled in" width="150">
</figure>

<figure style="margin: auto;">
<figcaption>The CO2 emissions for the journey are calculated from the information provided (a comparison is also provided to help contextualise the emissions):</figcaption><br>
<br>
<img src="assets/screenshots/ResultsScreen.png" alt="results for normal car" width="150">
</figure>

<figure style="margin: auto;">
<figcaption>Clicking the "Offset this carbon!" button takes the user to our chosen page where they can purchase a carbon offset:</figcaption><br>
<br>
<img src="assets/screenshots/OffsetPage.png" alt="results for normal car" width="150">
</figure>

<figure style="margin: auto;">
<figcaption>If the licence plate provided is an electric car, the journey does not emit any CO2:</figcaption><br>
<br>
<img src="assets/screenshots/ElectricCar.png" alt="results for electric car" width="150">
</figure>

<figure style="margin: auto;">
<figcaption>The user can click "History" to see a log of all journeys:</figcaption><br>
<br>
<img src="assets/screenshots/JourneyHistory.png" alt="journey history" width="150">
</figure>

<figure style="margin: auto;">
<figcaption>The user can also click "About" to learn more about the development team as well as additional information about carbon emissions:</figcaption><br>
<br>
<img src="assets/screenshots/AboutScreen.png" alt="about the app" width="150">
</figure>

## Technologies used

Area | Technology
---- | ----
Framework | React Native, Expo
Language | Javascript, JSX
API | DVLA Vehicle Enquiry Service
Emulators | Xcode, Android Studio

## Smells Like Green Spirit - The Development Team

[Glykeria Stravodimou](https://github.com/GlykeriaStr)  
[Jonathan Dawson](https://github.com/KarstenFinlay)  
[Karsten Finlay](https://github.com/bullhornfixie)  
[Miranda Wilson](https://github.com/mscwilson)  
[Tom Twigden](https://github.com/twigz826)

## How To Run

1) Clone this repository by entering `git clone https://github.com/GlykeriaStr/SmellsLikeGreenSpirit.git` in your terminal

2) Navigate to the root directory of the project

3) Enter `yarn install` in your terminal to install dependencies

4) Open a simulator for iOS using `yarn ios` (you must have Xcode installed), for Android open using the simulator of your choice.

5) Follow the prompts on the home screen

## Learning

Check out our learning log [here](https://github.com/GlykeriaStr/SmellsLikeGreenSpirit/blob/main/Documenting-Learning.md).

Check out our team charter [here](https://docs.google.com/document/d/15LuIkztoejXSH3xnyBak-b4HoZsaHOXN011JJEcq4zk/edit).

## User Stories
 ```
 As an environmentally conscious user
 So I can see my effect on the environment
 I want to be able to calculate my carbon emissions
 ```
 ```
 As an avid driver
 So that I can help the environment
 I want to see what I can do to benefit the environment
 ```
