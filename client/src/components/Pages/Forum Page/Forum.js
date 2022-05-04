import React from "react";
import { Box, Skeleton, Stack } from "@mui/material";
import { completeAchievement } from "../../../services/achievements";
import fetchService from "../../../services/fetchService";
import ThreadLink from "./ThreadLink";
import alertify from "alertifyjs";

function Forum() {
  const [threads, setThreads] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const shortenDate = (date) => {
    return date.substr(0, 10);
  };

  const loadingComponent = (
    <Box
      bgcolor="white"
      border={1}
      borderColor="rgba(25, 118, 210, 0.5)"
      height="60px"
    >
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{ bgcolor: "grey.100" }}
        height="60px"
      ></Skeleton>
    </Box>
  );

  React.useEffect(() => {
    document.title = "Community Forum - Student Specialty Advisor";
  }, []);
  React.useEffect(() => {
    completeAchievement("forumCompletion", "Come back soon!");
  }, []);

  React.useEffect(() => {
    fetchService
      .doGET("forum/threads")
      .then((response) => {
        if (response.success) {
          setThreads(response.threads);
          setIsLoaded(true);
        } else {
          throw response;
        }
      })
      .catch((error) => {
        alertify.error(
          "An error has occured while trying to load the forum threads!"
        );
      });
  }, []);

  return (
    <>
      <div className="forum-container">
        <h1>Community Forum</h1>
        <h6>
          Express your thoughts & share your experience with the specialties
        </h6>
        {isLoaded ? (
          <Stack className="forum-stack" spacing={2}>
            {threads.map((thread) => {
              return (
                <ThreadLink
                  key={thread._id}
                  name={thread.name}
                  date={shortenDate(thread.date)}
                  commentsNumber={thread.comments.length}
                />
              );
            })}
          </Stack>
        ) : (
          <Stack className="forum-stack" spacing={2}>
            {loadingComponent}
            {loadingComponent}
            {loadingComponent}
          </Stack>
        )}
      </div>
    </>
  );
}

export default Forum;
