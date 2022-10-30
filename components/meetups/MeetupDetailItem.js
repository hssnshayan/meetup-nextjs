import React from "react";
import classes from "./MeetupDetailItem.module.css"

const MeetupDetailItem = (props) => {
  return (
    <React.Fragment>
     <section className={classes.detail}>
     <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.address}</p>
     </section>
    </React.Fragment>
  );
};

export default MeetupDetailItem;
