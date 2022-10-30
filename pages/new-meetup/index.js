import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import API from "../../helpers/apis";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const router = useRouter();
  const api = API();
  const newMeetupHandler = async (meetupData) => {
    const response = await api.post("/api/new-meetup/", meetupData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response: ", response);
    const result = response.data;
    console.log("final result: ", result);
    router.push("/");
  };
  return (
    <React.Fragment>
      <Head>
        <title>Add new Meetup</title>
      </Head>
      <NewMeetupForm onAddMeetup={newMeetupHandler} />
    </React.Fragment>
  );
};

export default NewMeetup;
