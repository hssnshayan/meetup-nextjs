import { MeetupDataFetch } from "../../helpers/db-connection";

const handler = async (req, res) => {
  const meetups = await MeetupDataFetch(false, { _id: 1 });
  res.status(200).json({ message: "Meetup fetched!", data: meetups });
};

export default handler;
