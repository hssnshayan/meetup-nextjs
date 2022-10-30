import {MeetupDataQuery} from "../../helpers/db-connection";

const handler = async (req, res) => {
  const meetups = await MeetupDataQuery(true, {});
  res.status(200).json({ message: "Meetups fetched!", data: meetups });
};

export default handler;
