//1:25:00 [ALL IS DONE]

import { default as express } from "express";

const app = express();
const port = 3000;
app.use(express.static("210804"));

app.get("/suma", (req, res) => {
  const sk1 = parseFloat(req.query.pirmas);
  const sk2 = parseFloat(req.query.antras);
  res.send(sk1 + sk2 + "");
});

// app.get('/labukas', (req, res) => {
//   res.send('<html><body><h1>Labukas!</h1></body></html>');
// });
// app.get('/viso', (req, res) => {
//   res.send('<html><body><h1>Viso geriausio pasauli!</h1></body></html>');
// });
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});