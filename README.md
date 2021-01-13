# phone-book

### How to install and run

Prerequisite - Docker must be installed

Run the following command

`docker-compose up --build ` 

### API specification

##### Create person
`POST /api/persons`

request body should be a json with following structure

	{
    "name": "ram",
    "phone": {
       "home" : "1233456",
       "mobile" : "32342",
       "work": "354345645",
       "other": "45456"
    },
    "email": "def@gmail",
    "address": "1 mg rd"}
 
##### Find all persons
`GET /api/persons`

Following query params are supported
* page = page number starting from 1 (default = 1)
* size = max number of results required per page (default = 3)
* sort = name of the field to sort by. Use -field for descending order

##### Retrieve a person by id
`GET /api/persons/{id}`

##### Update a person by id
`PUT /api/persons/{id}`

request body should be a json with following structure

    {
    "name": "ram",
    "phone": {
       "home" : "1233456",
       "mobile" : "32342",
       "work": "354345645",
       "other": "45456"
    },
    "email": "def@gmail",
    "address": "1 mg rd"}
    
##### Remove a person by id
`DELETE /api/persons/{id}`

##### Remove all persons
`DELETE /api/persons`
