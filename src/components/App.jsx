import { useRef } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import useStyles from "./styles";
import useAlan from "./Alan";

import { Actors, MovieInformation, Movies, NavBar, Profile } from ".";

const App = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef();

  useAlan();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route path="/filmpire" element={<Movies />} />
          <Route path="/filmpire/approved" element={<Movies />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};

export default App;
