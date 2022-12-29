const expess = require('express');
const app = expess();
app.get("/", (req, res) => {
    res.send('<h1>kab pdhna shuru krna hai</h1>');
});
app.listen(8000, () => {
    console.log("server running");
});