import { Avatar, makeStyles, Typography } from "@material-ui/core";
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
  loadingArea: {
    textAlign: "center",
    marginTop: theme.spacing(2),
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
    setTimeout(() => {
      fetch("http://localhost:8000/data/", {
        method: "GET",
        dataType: "jsonp",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setPending(false);
        })
        .catch((e) => console.log(e.message));
    }, 500);
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
      {isPending && (
        <div className={classes.loadingArea}>
          <Typography style={{ fontSize: 20 }}>loading...</Typography>
        </div>
      )}
      {data && (
        <div>
          <img src={`https://twitter.com/${data[0].author_name}/photo`} />
          <div>{data[0].author_name}</div>
        </div>
      )}
    </div>
  );
};

/* npx json-server --watch db.json --port 8000 */
/* `https://twitter.com/${data[0].author_name}/photo` */
