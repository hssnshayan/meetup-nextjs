import { useRef, useState } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const [showSubmitMessage, setShowSubmitMessage]= useState(false);

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  function demoClickHandler(event){
    event.preventDefault();
    setShowSubmitMessage(true);
  }

  return (
    <Card>
      {/* the following line of code should be replaced with next one to submit form */}
      {/* <form classNa me={classes.form} onSubmit={submitHandler}> */}
      <form classNa me={classes.form}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
           {/* the following line of code should be replaced with next one to submit form */}
          {/* <button>Add Meetup</button> */}
          <button onClick={demoClickHandler}>Add Meetup</button>
          {showSubmitMessage && <p>Submitting new item is disabled for demo view!</p>}
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
