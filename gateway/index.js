const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

app.use(
  "/characters",
  createProxyMiddleware({
    target: "http://characters:8001",
    changetOrigin: true,
  })
);
app.use(
  "/films",
  createProxyMiddleware({
    target: "http://films:8002",
    changetOrigin: true,
  })
);
app.use(
  "/planets",
  createProxyMiddleware({
    target: "http://planets:8003",
    changetOrigin: true,
  })
);
app.use(
  "/database",
  createProxyMiddleware({
    target: "http://database:8004",
    changetOrigin: true,
  })
);

app.listen(8000, () => {
  console.log("Gateway on port 8000");
});