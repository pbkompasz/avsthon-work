import express, { Response, Request } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Create contract
// Returns rpc data to make payment
app.post("/contract", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Submit contract data to marketplace
app.post("/submit", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Signup user (employer, worker or validator) to marketplace
app.post("/signup", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Fetch marketplace data
app.get("/marketplace", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Fetch public contract from marketplace
app.get("/marketplace/contract", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Fetch user from marketplace
app.get("/marketplace/user", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Fetch validator from marketplace
app.get("/marketplace/validators", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
