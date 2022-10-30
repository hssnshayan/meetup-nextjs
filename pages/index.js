import { Fragment } from "react";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

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
  const response = await fetch("http://127.0.0.1:3000/api/meetups");
  const meetups = await response.json();
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
