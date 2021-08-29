import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/Navigation/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/UserProfile";
import PostForm from "./components/PostForm";
import Feed from "./components/Feed";
import SplashPage from "./components/Splashpage";
import NotFoundPage from "./components/NotFoundPage";
import ExplorePage from "./components/ExplorePage";
import SinglePost from "./components/SinglePost";
import { authenticate } from "./store/session";


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <SplashPage />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/posts/" exact={true}>
          <Feed />
        </ProtectedRoute>
        <ProtectedRoute path="/posts/upload" exact={true}>
          <PostForm />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/explore" exact={true}>
          <ExplorePage />
        </ProtectedRoute>
        <ProtectedRoute path="/posts/:postId" exact={true}>
          <SinglePost />
        </ProtectedRoute>
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
