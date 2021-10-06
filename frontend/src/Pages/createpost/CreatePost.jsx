import React from "react";
import "./createpost.css";
import { Input } from "@mui/material";
import { Button } from "@mui/material";

function CreatePost() {
  return (
    <div>
      <div style={{ paddingTop: "9rem" }}>
        <div className="media_card-createpost"> 
          <h1 className="brand-logo" style={{ margin: "0 auto" }}>
            Logo
          </h1>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Input type="text" placeholder="Name" />
            <Input type="text" placeholder="Age" />
            <Input type="text" placeholder="Profession" />
            <Button
              variant="contained"
              color="secondary"
              style={{ width: "9rem", margin: "0px auto" }}
            >
              Submit post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
