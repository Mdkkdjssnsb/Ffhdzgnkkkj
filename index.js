const express = require("express");
const { gpt } = require("gpti");

const app = express();
const port = 3000;

app.get("/gpt", (req, res) => {
    const prompt = req.query.prompt || "hindi bol"; // Default prompt is "hindi bol" if none provided in query params
    const model = req.query.model || "gpt-3.5-turbo"; // Default model is "gpt-3.5-turbo" if none provided in query params
    const markdown = req.query.markdown || false; // Default markdown is false if none provided in query params

    gpt.v1({
        prompt,
        model,
        markdown
    }, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error generating text");
        } else {
            const answer = data.gpt;
            res.send({ answer: answer });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
