import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import styled from "styled-components";
import { getData } from "../../FetchingApi/fetchApi";
import Load from "../../utils/Loader";
import { useLoader } from "../../Context/LoaderContext";

function TabComponent({ userid }) {
  const [value, setValue] = useState(0);
  const [data, setdata] = useState([]);
  const { showloader, setshowloader } = useLoader();

  useEffect(() => {
    GetPersonPost();
    // eslint-disable-next-line
  }, []);

  const GetPersonPost = async () => {
    setshowloader(true);
    const response = await getData(`/addpost/${userid}`);
    if (response.success) {
      setshowloader(false);
      setdata(response.posts);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          variant="fullWidth"
          aria-label="disabled tabs example"
        >
          <Tab label="Posts" />
          <Tab label="Saved" />
        </Tabs>
      </Paper>
      <PersonPost>
        {showloader ? (
          <Load />
        ) : (
          data.map((item, index) => {
            return (
              <div key={index}>
                <img
                  src={item.post}
                  alt="timeline-post"
                  width="300px"
                  height="200px"
                />
              </div>
            );
          })
        )}
      </PersonPost>
    </div>
  );
}

export default TabComponent;

const PersonPost = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  grid-auto-columns: minmax(50px, auto);
`;
