const express = require('express');

const app = express();

app.use(express.json());

/*
    localhost:3333/
 */
app.get("/", (request, response) => {
    return response.json([
        "Hello, World!"
    ]);
});

/*
    localhost:3333/courses
 */
app.get("/courses", (request, response) => {
    const query = request.query;
    console.log('query :>> ', query);
    return response.json([
        "Course 1", "Course 2", "Course 3"
    ]);
});

app.post("/courses", (request, response) => {
    const body = request.body;
    console.log('body :>> ', body);
    return response.json([
        "Course 1", "Course 2", "Course 3", "Course 4"
    ]);
});

app.put("/courses/:id", (request, response) => {
    const { id } = request.params;
    console.log('params :>> ', id);
    return response.json([
        "Course 1", "Course 2", "Course 3", "Course 4"
    ]);
});

app.patch("/courses/:id", (request, response) => {
    return response.json([
        "Course 6", "Course 7", "Course 8", "Course 9"
    ]);
});

app.delete("/courses/:id", (request, response) => {
    return response.json([
        "Course 6", "Course 7", "Course 8"
    ]);
});

/*
    expose port 3333
 */
app.listen(3333);