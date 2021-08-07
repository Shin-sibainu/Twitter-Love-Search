import React from "react";
import { TextField } from "@material-ui/core";

export const Input = (props) => {
  const { handleSubmit, handleInput, submitText } = props;
  return (
    <div>
      <form type="submit" onSubmit={handleSubmit}>
        <TextField
          label="@twitter_id"
          placeholder="気になる人のscreen_name"
          style={{ width: 200 }}
          value={submitText}
          onChange={handleInput}
        ></TextField>
      </form>
    </div>
  );
};
