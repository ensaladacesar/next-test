import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Index.module.css";
import Navbar from "../components/navbar";
import React from "react";
import { Grid } from "@material-ui/core";
import LoginForm from "../components/loginForm";

export default function Home() {
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item md={6}>
          <LoginForm/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
