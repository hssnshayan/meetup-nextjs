import { MongoClient, ObjectId } from "mongodb";
import _ from "lodash";

const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const ConnectionString = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.2gvtcfp.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

export const MeetupDataQuery = async (get = true, insert = {}) => {
  const client = await MongoClient.connect(ConnectionString);
  const db = client.db();
  const meetupCollection = db.collection("meetups");

  if (get) {
    const meetups = await meetupCollection.find().toArray();
    client.close();
    return meetups;
  }
  if (!_.isEmpty(insert)) {
    const result = await meetupCollection.insertOne(insert);
    client.close();
    return result;
  }
};
 
export const MeetupDataFetch = async (id=undefined, data={})=>{
  const client = await MongoClient.connect(ConnectionString);
  const db = client.db();
  const meetupCollection = db.collection("meetups");

  if (id) {
    const meetup = await meetupCollection.findOne({_id:ObjectId(id)});
    client.close();
    return meetup;
  }
  if (!_.isEmpty(data)) {
    const result = await meetupCollection.find({}).project(data).toArray();
    client.close();
    return result;
  }
}
