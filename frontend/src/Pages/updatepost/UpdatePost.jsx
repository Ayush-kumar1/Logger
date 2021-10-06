import React from 'react'
import "./updatepost.css";
function UpdatePost() {
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
              Update post
            </Button>
          </div>
        </div>
      </div>
        </div>
    )
}

export default UpdatePost
