import {MeetupDataQuery} from "../../helpers/db-connection";


const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const result = await MeetupDataQuery(false, data);
    console.log("result: ", result);
    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
