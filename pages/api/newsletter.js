import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      return res.status(422).json({ message: "Invalid email address." });
    }

    const client = await MongoClient.connect(
      "mongodb+srv://root:root@nextjscluster.3kek9.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db("newsletter");

    await db.collection("emails").insertOne({ email: userEmail });

    client.close();

    res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;
