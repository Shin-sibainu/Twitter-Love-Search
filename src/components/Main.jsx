// eslint-disable-next-line
import { Avatar, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Input } from "../components/input/Input";
import CircularProgress from "@material-ui/core/CircularProgress";
//import { UseFetch } from "../UseFetch";

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
    marginBottom: theme.spacing(2),
  },
  result: {
    textAlign: "center",
    marginTop: theme.spacing(5),
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: theme.spacing(3, 3),
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
        dataType: "json",
        contentType: "application/json",
        mode: "cors",
        credentials: "include", // ここを追加。
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
    }, 1000);
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
          <CircularProgress style={{ fontSize: 20, marginTop: "22px" }} />
        </div>
      )}
      {data && (
        <div className={classes.result}>
          <Typography style={{ marginBottom: "12px" }}>
            {submitText}さんが好きな人は
          </Typography>
          <Typography>↓↓↓↓↓↓↓↓↓</Typography>
          <Avatar
            src="https://images.dog.ceo/breeds/labrador/n02099712_1436.jpg"
            style={{ display: "inline-block" }}
            className={classes.avatar}
          />
          <Typography>
            <a href={`https://twitter.com/${data[0].author_name}`}>
              {data[0].author_name}
            </a>
            さんかもしれません...
          </Typography>
        </div>
      )}
    </div>
  );
};

/* npx json-server --watch db.json --port 8000 */
/* `https://twitter.com/${data[0].author_name}/photo` */
