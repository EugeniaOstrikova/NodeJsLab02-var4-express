# NodeJsLab02-var4-express
Homework 2. Express.

Application to make http request with json data.
## API
localhost:8080
#### Authors
Get authors:
```
GET /authors
```
Create author:
```
POST /authors
```
{"name": "string"}

Get author by id:
```
GET /authors/:authorId
```
Remove author by id:
```
DELETE /authors/:authorId
```
Add publisher for author by id:
```
POST /authors/:authorId/publishers/:publisherId
```
{"salary": "number"}

Remove publisher for author by id:
```
DELETE /authors/:authorId/publishers/:publisherId
```
Get publishers for author by id, with total salary:
```
GET /authors/:authorId/publishers
```
#### Publishers
Get publishers:
```
GET /publishers
```
Create publisher:
```
POST /publishers
```
{"name": "string"}

Get publisher by id:
```
GET /publishers/:publisherId
```
Remove publisher by id:
```
DELETE /publishers/:publisherId
```
Remove author from publisher:
```
DELETE /publishers/:publisherId/authors/:authorId
```
Get authors for publisher by id, with total salary:
```
GET /publishers/:publisherId/authors
```