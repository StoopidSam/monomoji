export default function handler(req, res) {
  //check if req method is GET
  if (req.method === "GET") {
    const order = req.query.order;
    const symbols = req.query.symbols;
    res.status(200).json({ message: `Welcome to Monomoji! Order: ${order}` });
  } else {
    // Handle any other HTTP method
    res.status(404).json({ message: "Not found" });
  }
}
