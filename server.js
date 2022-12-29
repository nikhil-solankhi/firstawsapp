const expess = require('express');
const app = expess();
app.get("/", (req, res) => {
    res.send('<h1>my page</h1>');
});
app.listen(4000, () => {
    console.log("server running");
});