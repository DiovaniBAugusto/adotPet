import app from "./app";

const port = process.env.SERVER_PORT || 5000;

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
