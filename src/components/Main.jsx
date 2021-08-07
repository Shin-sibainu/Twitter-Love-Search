import { makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Input } from "../components/input/Input";
import { UseFetch } from "../UseFetch";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    marginTop: theme.spacing(5),
    fontSize: "35px",
  },
  inputArea: {
    marginTop: theme.spacing(5),
    textAlign: "center",
  },
}));

export const Main = () => {
  const classes = useStyles();
  const [submitText, setSubmitText] = useState("");
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(submitText);
    setPending(true);
    //ここでAPIを呼び出す処理がしたい。
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setPending(false);
      })
      .catch((e) => console.log(e.message));
  };

  const handleInput = (e) => {
    setSubmitText(e.target.value);
  };

  return (
    <div className={classes.main}>
      <Typography className={classes.title} variant="h1">
        気になるあの子が好きな人
      </Typography>
      <div className={classes.inputArea}>
        <Input
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          submitText={submitText}
        />
      </div>
      {data && <div>{data.title}</div>}
      {isPending && <div>loading...</div>}
    </div>
  );
};
