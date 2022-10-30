import React from "react";
import Head from "next/head";
import API from "../../helpers/apis";
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

// export const getStaticPaths = async () => {
//   const api = API();
//   const response = await api.get("/api/fetch-ids");
//   const meetupIds = response.data;
//   return {
//     fallback: 'blocking',
//     paths: meetupIds.data.map((meetup) => ({
//       params: {
//         meetupId: meetup._id.toString(),
//       },
//     })),
//   };
// };

export const getServerSideProps = async (context) => {
  const api = API();
  const meetupId = context.params.meetupId;
  const response = await api.get(`/api/fetch-data?id=${meetupId}`);
  const meetup = response.data;
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
