import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import PrivateRoute from "./components/Auth/PrivateRoute";
import AdminRoute from "./components/Auth/AdminRoute";
import AuthVerify from "./components/Auth/AuthVerify";

import Navbar from "./components/Navbar/Navbar";
import LogInForm from "./components/Forms/LogInForm";
import SignUpForm from "./components/Forms/SignUpForm";

import Home from "./components/Pages/Home Page/Home";
import Profile from "./components/Pages/Profile Page/Profile";
import ChangePassword from "./components/Pages/Profile Page/ChangePassword";
import Quiz from "./components/Pages/Quiz Page/Quiz";
import Programs from "./components/Pages/Programs/Programs";
import Forum from "./components/Pages/Forum";
import MeetingsRequest from "./components/Pages/Meeting Page/MeetingsRequest";
import MeetingsAbout from "./components/Pages/Meeting Page/MeetingsAbout";
import MeetingsAdvisorsList from "./components/Pages/Meeting Page/MeetingsAdvisorsList";
import QuizContainer from "./components/Pages/Quiz Page/QuizContainer";
import VideosList from "./components/Pages/Videos Page/VideosList";
import Dashboard from "./components/Pages/Dashboard Page/Dashboard";
import ChatBotSSA from "./components/Chat Bot/ChatBotSSA";
import NoMatch from "./components/Pages/NoMatch";
import MeetingBottomNavbar from "./components/Pages/Meeting Page/MeetingBottomNavbar";
function App() {
  return (
    <Router>
      <Navbar />
      <AuthVerify />
      <ChatBotSSA />
      <PrivateRoute
        path={["/meetings/about", "/meetings/advisors", "/meetings/request"]}
        component={MeetingBottomNavbar}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <AdminRoute exact path="/dashboard/:parameter" component={Dashboard} />
        <Redirect exact from="/dashboard" to="/dashboard/statistics" />
        <PrivateRoute exact path="/quiz" component={Quiz} />
        <PrivateRoute exact path="/quiz/started" component={QuizContainer} />
        <PrivateRoute
          exact
          path="/programs/:specialty/:section/"
          component={Programs}
        />
        <Redirect exact from="/programs/se" to="/programs/se/overview" />
        <Redirect exact from="/programs/cse" to="/programs/cse/overview" />
        <Redirect exact from="/programs/re" to="/programs/re/overview" />
        <Redirect exact from="/programs/*" to="/programs/se/overview" />
        <PrivateRoute exact path="/videos/:specialty" component={VideosList} />
        <Redirect exact from="/videos" to="/videos/se" />
        <PrivateRoute
          exact
          path="/meetings/request"
          component={MeetingsRequest}
        />
        <PrivateRoute
          exact
          path="/meetings/advisors"
          component={MeetingsAdvisorsList}
        />
        <PrivateRoute exact path="/meetings/about" component={MeetingsAbout} />
        <PrivateRoute exact path="/forum" component={Forum} />
        <Route exact path="/login" component={LogInForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute
          exact
          path="/profile/password"
          component={ChangePassword}
        />
        <Route exact path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
