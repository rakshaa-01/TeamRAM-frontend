# FrontEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Implementations done (TeamRAM - backend + frontend)

- StockLabel is validated from Yahoo finance API
- Price is retrieved from external API
- Exception handling if any field is empty
- StatusCode, Price are readonly fields to avoid modifications by user
- StatusCode is filled by a random status code generator which has 10% failure and 90% success rate
- EmailJS library is integrated to generate email upon successful BUY/SELL
- ChartJS library is used to generate visually appealing charts from data
- Profile picture feature is added whose picture can be changed by user if needed
- Routing and navigation are implemented to take the user to the particular location automatically after clicking the link
- Responsive website features are added
- Create, Read, Update and Delete (CRUD) functionalities are implemented
- SwaggerUI is given for the backend and frontend for easy API documentation
- Deployed in OpenShift
- Both frontend (Angular) and backend (SpringBoot) testing done, JaCoCo code coverage is 90%, both positive and negative cases are covered
- Branches and pull requests are implemented
- Trello has been used as the project management tool

## Trello boards - Project Management

[Backend Trello Board](https://trello.com/b/witr5k5J/trading-rest-api-project-backend)
<br><br>
[Frontend Trello Board](https://trello.com/b/IX9dBV79/trading-rest-api-project-frontend)

## Architecture diagram

![1](https://github.com/rakshaa-01/TeamRAM-frontend/assets/97796804/d93908cc-5e5b-4980-a413-d231f17007eb)
![2](https://github.com/rakshaa-01/TeamRAM-frontend/assets/97796804/fd729834-cbb1-4169-9031-ecc8fa583bfe)

## Email functionality

![email_conf](https://github.com/rakshaa-01/TeamRAM-frontend/assets/97796804/5e18f2e2-7c3e-4631-bfb0-fe230eeb7510)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
