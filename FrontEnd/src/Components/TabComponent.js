import React, { useState ,useEffect} from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import styled from "styled-components";
import {getData} from '../FetchingApi/fetchApi'
function TabComponent({userid}) {
  const [value, setValue] = useState(0);
  const [data, setdata] = useState([]);

  useEffect(() => {
    GetPersonPost();
  }, [])


 const GetPersonPost = async ()=> {

  let response = await getData(`/addpost/${userid}`)
  if(response.success){
    setdata(response.posts);
  }


}

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
      {
        data.map((item)=><div><img src={item.post}/></div>)

      }


    </PersonPost>
    </div>
  );
}

export default TabComponent;


const PersonPost = styled.div`
margin: 10px;
display: grid;
grid-template-columns:  auto auto auto;

`;
