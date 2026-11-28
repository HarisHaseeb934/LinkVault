import app from "./app.js";
import connectDb from "./config/db.js";

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`Server is running at PORT: ${PORT}`);
    });
  } catch (error) {
    console.log(`App failed to listen: ${error}`);
  }
};

startServer();
