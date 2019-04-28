const TOYS_url = "http://localhost:3000/toys"

const getToys = () =>
fetch(TOYS_url)
.then(resp => resp.json())


const createToy = toy =>
fetch(TOYS_url, {
  method: "POST",
  headers: { "Content-Type": "application/json"},
  body: JSON.stringify(toy)
  }).then(resp => resp.json())

const updateToy = toy =>
fetch(TOYS_url + `/${toy.id}`, {
  method: "PATCH",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify(toy)
}).then(resp => resp.json())

const increaseLikes = toy =>
fetch(TOYS_url + `/${toy.id}`, {
  method: "PATCH",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({ likes: toy.likes})
}).then(resp => resp.json())


const deleteToy = id => 
fetch(TOYS_url + `/${id}`,  {
  method: "DELETE"
}).then(resp => resp.json())


