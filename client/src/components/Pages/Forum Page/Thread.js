import React from "react";
import { useParams } from "react-router-dom";
import fetchService from "../../../services/fetchService";
import Comment from "./Comment";
import alertify from "alertifyjs";

function Thread(props) {
  let { thread } = useParams();
  const [comments, setComments] = React.useState([]);
  React.useEffect(() => {
    document.title =
      thread.charAt(0).toUpperCase() +
      thread.slice(1) +
      " Section - Student Specialty Advisor";
  }, [thread]);
  const fetchComments = () => {
    fetchService
      .doGET("forum/comments/" + thread.replace(/-/g, " "))
      .then((response) => {
        if (response.success) {
          setComments(response.comments);
        } else throw response;
      })
      .catch((error) => {
        props.history.push("/forum");
        alertify.error("an error was occured while loading the forum comments");
      });
  };

  const commentsList = comments.map((c) => {
    return (
      <Comment key={c._id} user={c.user} date={c.date} content={c.message} />
    );
  });

  React.useEffect(fetchComments, [thread, props.history]);

  return (
    <>
      <div className="forum-container">
        <h1>{thread.replace(/-/g, " ")}</h1>
      </div>
      {commentsList}
    </>
  );
}

export default Thread;
