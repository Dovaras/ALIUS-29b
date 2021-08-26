//1:25:00 [ALL IS DONE]

import { default as express } from "express";

const app = express();
const port = 3000;
app.use(express.static("210805"));

app.get("/suma", (req, res) => {
  const sk1 = parseFloat(req.query.pirmas);
  const sk2 = parseFloat(req.query.antras);
  res.send(sk1 + sk2 + "");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});