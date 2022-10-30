import {MeetupDataFetch} from "../../helpers/db-connection";

const handler = async (req, res) => {
    const meetup = await MeetupDataFetch(req?.query?.id, {});
    res.status(200).json({ message: "Meetup fetched!", data: meetup });
  };

export default handler;
