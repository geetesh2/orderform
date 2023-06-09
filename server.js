const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/my-order-app-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define order schema
const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true ,unique: true},
  orderName: { type: String, required: true },
});

// Define order model
const Order = mongoose.model("Order", orderSchema);

// Parse JSON request bodies
app.use(express.json());

// Handle POST requests to /api/orders
app.post("/api/orders", async (req, res) => {
  const { orderId, orderName } = req.body;

  try {
    // Create new order document
    const order = new Order({ orderId, orderName });

    // Save order to database
    await order.save();

    // Send response
    res.status(200).send("Order saved successfully!");
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).send("Error saving order.");
  }
});

// Get request to show all orders in JSON format
app.get("/api/orders", async (req, res) => {
    try {
      const orders = await Order.find();
      res.json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  });
  


// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
