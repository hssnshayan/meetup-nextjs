import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

const NewMeetup = () => {
  const router = useRouter();
  const newMeetupHandler = async (meetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
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
