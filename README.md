# BICYRENT APP

An application (practice) with Ruby on Rails, PostgreSQL, Google oAuth, and Next js

## 🏞️ Graphic Design

![Home page](https://raw.githubusercontent.com/miltoncodeyt/project-bicyrent/main/assets/home.png)

![Bicycle page](https://raw.githubusercontent.com/miltoncodeyt/project-bicyrent/main/assets/bicycles.png)

## 📜 System Requirement
- Node.js `14.20.0` or later [👉 Install Node](https://nodejs.org/es/download)
- Yarn. [👉 Install Yarn](https://classic.yarnpkg.com/lang/en/docs/install)
- Ruby `2.7.6` or later [👉 Install Ruby](https://www.ruby-lang.org/en/documentation/installation)

### Visual Studio Code

**Extensions aditionals**

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): It helps you see the alerts from the linter in real-time in your editor. archive base `notes-app/.eslintrc.json`
- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) if you want to test the API with Visual Studio Code, you can use this extension to execute the `request/` files

## 🗃️ Environment

```
  BICYRENT_GOOGLE_OAUTH_CLIENT_SECRET=""
  BICYRENT_GOOGLE_OAUTH_CLIENT_ID=""

  NEXT_PUBLIC_API_URL_SERVER="http://localhost:3001"

  PGPORT=""
  DB_USER=""
  DB_PASSWORD=""
  DB_HOST=""
```


## 📚 Folder Structure

- `bicyrent-app/`: Source code base. Frontend made with **NextJS**
- `backend`: API REST file made with Ruby on Rails
- `request/`: Examples to test the API and EndPoints
- `provision/`: The files to provision the Docker containers
- `assets/`: Contains resources, diagrams

## 🐳 Running the app inside containers

To run the application with containers you will need:

- Docker. [👉 Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose. [👉 Install Docker Compose](https://docs.docker.com/compose/install/)
- Make. [👉 Install Make](https://www.gnu.org/software/make/)

then run the following command int the root `/` to initialize the application:

```bash
  make init
```

and to start the application:

```bash
  make start
```
go to `http://localhost:3000` to see the application running