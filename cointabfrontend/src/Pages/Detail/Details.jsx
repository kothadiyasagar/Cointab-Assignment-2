import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../redux/user/useraction";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import LinearProgress from "@mui/material/LinearProgress";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import OutlinedInput from "@mui/material/OutlinedInput";

const Details = () => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const [nameSort, setNameSort] = useState();
  const [options, setoptions] = useState();

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);

    const filter = users?.filter((elem)=>{
      return elem.country == event.target.value
    })

    setNameSort(filter)
  };

  const columns = [
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "age",
      text: "Age",
      sort: true,
    },
    {
      dataField: "gender",
      text: "Gender",
      sort: true,
    },
    {
      dataField: "city",
      text: "City",
      sort: true,
    },
    {
      dataField: "state",
      text: "State",
      sort: true,
    },
    {
      dataField: "country",
      text: "Country",
    },
  ];
  const dispatch = useDispatch();
  const users = useSelector((store) => store.User.UserData);
  const { loading, error } = useSelector((store) => store.User);
  // console.log(users);

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);
  useEffect(() => {
    setNameSort(users);
    let dataoption = [];
    users.map((elem) => {
      if (!dataoption.some((x) => x == elem.country)) {
        dataoption.push(elem.country);
      }
    });

    setoptions(dataoption);
  }, [users]);

  const selectOption = options?.map((elem) => (
    <MenuItem value={elem}>{elem}</MenuItem>
  ));
  if (loading) {
    return <LinearProgress />;
  }

  if (error) {
    return <div>ERROR.....</div>;
  }

  return (
    <>
      <div
        style={{
          width: "80%",
          margin: "auto",
          justifyContent: "center",
          marginBottom: "40x",
          marginTop: "20px",
        }}
      >
        <div>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              MenuProps={MenuProps}
              value={age}
              label="Country"
              input={<OutlinedInput label="Country" />}
              onChange={handleChange}
            >
              {selectOption}
            </Select>
          </FormControl>
        </div>
        <div>
          {nameSort && (
            <BootstrapTable
              bootstrap4
              wrapperClasses="table-responsive"
              rowClasses="tr-custom-radius"
              bordered={true}
              headerClasses="text-primary"
              classes={
                "table table-head-custom table-vertical-center overflow-hidden " +
                "table-borderless tr-spacing"
              }
              keyField="name"
              data={nameSort}
              columns={columns}
              pagination={paginationFactory({ sizePerPage: 5 })}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Details;
