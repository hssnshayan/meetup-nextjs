import { Fragment } from "react";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import API from '../helpers/apis'

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Very simple Nextjs meetup app</title>
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;
//   console.log(req)
//   console.log(res)
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };
export const getStaticProps = async () => {
  const api = API();
  const response = await api.get("/api/meetups");
  const meetups = response.data;
  return {
    props: {
      meetups: meetups.data.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
};
export default HomePage;
