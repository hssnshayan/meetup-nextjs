import React from "react";
import Head from "next/head";
import MeetupDetailItem from "../../components/meetups/MeetupDetailItem";

const MeetupDetail = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Meetup: {props.meetupData.title}</title>
      </Head>
      <MeetupDetailItem
        id={props.meetupData.id}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
        img={props.meetupData.img}
      />
    </React.Fragment>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch("http://127.0.0.1:3000/api/fetch-ids");
  const meetupIds = await response.json();
  return {
    fallback: 'blocking',
    paths: meetupIds.data.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
};
export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  const response = await fetch(
    `http://127.0.0.1:3000/api/fetch-data?id=${meetupId}`
  );
  const meetup = await response.json();
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: meetup.data.title,
        address: meetup.data.address,
        description: meetup.data.description,
        img: meetup.data.image,
      },
    },
  };
};
export default MeetupDetail;
