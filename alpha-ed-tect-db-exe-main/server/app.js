const app = require("./server");
const port = 4000;

app.listen(port, () => {
    console.log(`app listening at http://127.0.0.1:${port}`);
});