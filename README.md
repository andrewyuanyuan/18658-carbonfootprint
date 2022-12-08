# Cynance

Welcome come to our repository for Cynance!

**Style Guide: [link](https://www.figma.com/file/4eV5dsoPLYhabC7i7g5v1r/SRID-Style-Guide-(Cynance)?node-id=0%3A1&t=UQVzMSTM3kMez0ym-0)**

## Technology Stack

We use [**React**](https://reactjs.org/) as our frontend framework and [**MUI**](https://mui.com/) as our component library.

Due to time limit, we mainly focused on frontend implementation for iteration 1 so there isn't a real backend yet.

Nonetheless, our frontend implementation fully comply with the style guide we defined and has a well-structured codebase. The file tree below will explain how we organize our project in details:

```
.gitignore
.prettierrc 				-> Code formatter file, applies Airbnb standard
package-lock.json			
package.json
public						-> Holds all the static resources such as avatars and projects images
   |-- static
   |   |-- images
   |   |   |-- avatars
   |   |   |-- projects
src							-> Source code root
   |-- __mocks__				-> Holds all the API mooc datas
   |-- icons
   |-- common					-> Holds all the components that will be used in high frequency 
   |   |-- Logo.js				-> Reusable Logo component
   |   |-- dashboard			-> navbar and side bar for investor
   |   |   |-- components			-> Holds all the components of parent component (applies to all)
   |   |   |-- index.js				-> Each parent has one unified exit (applied to all)
   |   |-- header				-> navbar and side bar for investor
   |-- pages				-> Each page has its own folder
   |   |-- accountDashboard
   |   |-- carbondashboard
   |   |   |-- balance
   |   |   |-- customization
   |   |   |-- emissionQuota
   |   |   |-- recent
   |   |   |-- transaction
   |   |-- chatroom
   |   |-- fundraisingdashboard
   |   |   |-- bankactivity
   |   |   |-- customization
   |   |   |-- progress
   |   |   |-- recent
   |   |-- myProjects
   |   |-- postProject
   |   |-- projectDetail
   |   |-- projectGallary
   |   |-- projectInvest
   |   |-- projects
   |   |-- test
   |-- App.js				-> Root component of our application
   |-- index.js				-> Traditional and actual entry point for all node apps
   |-- theme				-> Holds theme file where we implement our style guide
   |-- utils				-> Holds all the utils functions
```

As stated before, for milestone 1, we do not have an actual backend with database, instead we use **localstorage** as our database temporarily.

## Operation Instructions

1. Clone our repository to local

    ```bash
    git clone https://github.com/Zizhen/18658-carbonfootprint.git
    ```

2. In the project directory, run the following command to install all the dependencies

    ```bash
    npm install
    ```

3. Runs the app in the development mode

    ```bash
    npm start
    ```

4. Open [http://localhost:3000](http://localhost:3000/) (might differ if port `3000` is occupied) to view it in your browser

## Limitations

1. We did not create an actual backend linked to database due to time limit

2. Components below are static without functionalities, which are not part of our MVP and will be implemented in future iterations.

    ```
    carbondashboard - balance
    carbondashboard - customization
    carbondashboard - emissionQuota
    carbondashboard - transaction
    fundraisingdashboard - customization
    fundraisingdashboard - bankactivity
    ```