<p align="center">
  <a href="https://github.com/lgsfarias/tractian-challenge-back">
    <img src="https://tractian.com/tractian-favicon-ia.png" alt="readme-logo" width="80" height="80">
  </a>

  <h3 align="center">
    Tractian Challenge API
  </h3>
  <p align="center">
    API to an assets management system
    <br />
    <a href="https://github.com/lgsfarias/tractian-challenge-back"><strong>Explore the docs »</strong></a>
    <br />
</p>

<br/>

## ⛏️ Built With

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-47A248?style=for-the-badge&logo=mongoose&logoColor=white)
![JasonWebToken](https://img.shields.io/badge/JSON_Web_Token-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)
![HeroKu](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

<br/>

## 🏁 Usage

To run this project, you will need to install [Node.js](https://nodejs.org/en/).

Clone the repository:

```bash
git clone https://github.com/lgsfarias/tractian-challenge-back.git
```

Access the project folder:

```bash
cd tractian-challenge-back
```

Fill the .env following the .env.example file

```bash
cp .env.example .env
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

<br/>

## 🚀 Routes

```yml
POST /login
    - Route to authenticate a user
    - headers: {}
    - body: {
        "email": "lorem@gmail.com",
        "password": "lorem123"
    }
```

```yml
POST /signup
    - Route to create a new user
    - headers: {}
    - body: {
      "name": "Lorem Ipsum"
      "email": "lorem@gmail.com",
      "password": "lorem123",
      "confirmPassword": "lorem123",
      "company": "Lorem"
   }
```

```yml
GET /users/show-data
    - Route to show user data
    - headers: {
        "Authorization": "Bearer <token>"
    }
```

````yml

```yml
POST /companies/
    - Route to create a new company
    - headers: {
        "Authorization": "Bearer <token>"
    }
    - body: {
      "name": "Lorem Ipsum"
   }
````

```yml
GET /companies/
    - Route to get all companies
    - headers: {
        "Authorization": "Bearer <token>"
    }
```

```yml
GET /companies/:id
    - Route to get a company by id
    - headers: {
        "Authorization": "Bearer <token>"
    }
```

```yml
PUT /companies/:id
    - Route to update a company by id
    - headers: {
        "Authorization": "Bearer <token>"
    }
    - body: {
      "name": "Lorem Ipsum"
   }
```

```yml
DELETE /companies/:id
    - Route to delete a company by id
    - headers: {
        "Authorization": "Bearer <token>"
    }
```

```yml
POST /units/
    - Route to create a new unit
    - headers: {
        "Authorization": "Bearer <token>"
    }
    - body: {
      "name": "Lorem Ipsum",
      "company": "60f1a1f1b9c1a00015e1b1a1"
   }
```

```yml
GET /units/
    - Route to get all units
    - headers: {
        "Authorization": "Bearer <token>"
    }
```

```yml
GET /units/:id
    - Route to get a unit by id
    - headers: {
        "Authorization": "Bearer <token>"
    }
```

```yml
PUT /units/:id
    - Route to update a unit by id
    - headers: {
        "Authorization": "Bearer <token>"
    }
    - body: {
      "name": "Lorem Ipsum",
      "company": "60f1a1f1b9c1a00015e1b1a1"
   }
```

```yml
DELETE /units/:id
    - Route to delete a unit by id
    - headers: {
        "Authorization": "Bearer <token>"
    }
```

```yml
POST /assets/
    - Route to create a new asset
    - headers: {
        "Authorization": "Bearer <token>"
    }
    - body: {
      "image": "https://lorem.com",
      "name": "Lorem Ipsum",
      "model": "Lorem Ipsum",
      "description": "Lorem Ipsum",
      "status": "Running",
      "healthLevel": 100,
      "unit": "60f1a1f1b9c1a00015e1b1a1",
      "owner": "60f1a1f1b9c1a00015e1b1a1"
   }
```

```yml
GET /assets/by-company/:companyId
    - Route to get all assets by company id
    - headers: {
        "Authorization": "Bearer <token>"
    }
```

```yml
GET /assets/by-unit/:unitId
    - Route to get all assets by unit id
    - headers: {
        "Authorization": "Bearer <token>"
    }
```

```yml
GET /assets/:id
    - Route to get a asset by id
    - headers: {
        "Authorization": "Bearer <token>"
    }
```

```yml
PUT /assets/:id
    - Route to update a asset by id
    - headers: {
        "Authorization": "Bearer <token>"
    }
    - body: {
      "image": "https://lorem.com",
      "name": "Lorem Ipsum",
      "model": "Lorem Ipsum",
      "description": "Lorem Ipsum",
      "status": "Running",
      "healthLevel": 100,
      "unit": "60f1a1f1b9c1a00015e1b1a1",
      "owner": "60f1a1f1b9c1a00015e1b1a1"
   }
```

```yml
DELETE /assets/:id
    - Route to delete a asset by id
    - headers: {
        "Authorization": "Bearer <token>"
    }
```

```yml
POST /employees/
    - Route to create a new employee
    - headers: {
        "Authorization": "Bearer <token>"
    }
    - body: {
      "name": "Lorem Ipsum",
      "unit": "60f1a1f1b9c1a00015e1b1a1",
    }
```

```yml
GET /employees/by-company/:companyId
    - Route to get all employees by company id
    - headers: {
        "Authorization": "Bearer <token>"
    }
```

```yml
GET /employees/by-unit/:unitId
    - Route to get all employees by unit id
    - headers: {
        "Authorization": "Bearer <token>"
    }
```

```yml
GET /employees/:id
    - Route to get a employee by id
    - headers: {
        "Authorization": "Bearer <token>"
    }
```

```yml
PUT /employees/:id
    - Route to update a employee by id
    - headers: {
        "Authorization": "Bearer <token>"
    }
    - body: {
      "name": "Lorem Ipsum",
      "unit": "60f1a1f1b9c1a00015e1b1a1",
    }
```

```yml
DELETE /employees/:id
    - Route to delete a employee by id
    - headers: {
        "Authorization": "Bearer <token>"
    }
```

<br/>

## Contact

<div>
  <a href="https://www.linkedin.com/in/lgsfarias" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
  <a href = "mailto:lgsfarias.dev@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
</div>
