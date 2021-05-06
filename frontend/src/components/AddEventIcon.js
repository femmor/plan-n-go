import React from "react";
import styled from "styled-components";
import {COLORS} from "../Constants";
import Dialog from "@material-ui/core/Dialog";
import { useHistory } from "react-router-dom";

const AddEventIcon = () => {
  let history = useHistory();

  const handleOnClick = (value) => {
    history.push("/new");
  };

  return (
    <NewEventIcon id="addNewEvent" onClick={() => handleOnClick()}>
      +
    </NewEventIcon>
  );
};
const NewEventIcon = styled.button`
  font-size: 4rem;
  line-height: 1rem;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  border: none;
  color: white;
  background-color: ${COLORS.main4};
  position: fixed;
  bottom: 10px;
  right: 10px;
  &:focus {
    outline: none;
  }
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
export default AddEventIcon;