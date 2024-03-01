# ( CCRIPT ASSIGNMENT ) By Farhan Amin

Following are the Quick Start Steps to run and test the Application

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```

## Usage

## Start Application
After Installation of all necessary dependencies. We write Following command with:
```
npm start
```

To test the APIs you've created, you can use tools like Postman or Curl. Here's how you can test each type of API endpoint:

## GET ``/api/users``
Using ``Postman:``
1. Open Postman and create a new request.
2. Set the request type to GET.
3. Enter the URL http://localhost:5000/api/users.
4. Click the Send button to make the request.

# Filtering: By Name
```
http://localhost:5000/api/users?name=user1
```
# Pagination: By Page and PageSize
```
http://localhost:5000/api/users?page=2&pageSize=20
```

# Sorting: By Property and Order 'ASC or DESC'
```
http://localhost:5000/api/users?sortBy=age&sortOrder=desc
```

## Regards

``Farhan Amin``