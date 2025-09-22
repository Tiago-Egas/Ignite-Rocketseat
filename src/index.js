const express = require('express');
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const customers = [];

/**
 * cpf - string
 * name - string
 * id - uuid
 * statement []
 */
app.post("/account", (req, res) => {
    const { cpf, name } = req.body;

    const customersAlreadyExist = customers.some(
        (customer) => customer.cpf === cpf
    );

    if (customersAlreadyExist) {
        return res.status(400).send({
            error: "Customer already exists!"
        });
    }

    const id = uuidv4();

    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: [],
    })

    return res.status(201).send({
        "message": "Customer created"
    });
})

app.get("/statement/:cpf", (req, res) => {
    const { cpf } = req.params;

    const customer = customers.find(customer => customer.cpf === cpf);

    if(!customer) {
        return res.status(400).send({
            "error": "Customer not found"
        });
    }

    return res.json(customer.statement);
});

app.listen(3333);