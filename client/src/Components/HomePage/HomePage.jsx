import React from "react";
import FormSearchBug from "../FormSearchBug/FormSearchBug";
import NavMain from "../NavMain/NavMain";
import BugInformation from "../BugInformation/BugInformation";

const HomePage = ({
  handleSubmit,
  handleInputChange,
  inputValue,
  setInputValue,
  data,
}) => {
  //    if exists data in data, the component BugInformation is rendered
  let validationData = data.length;

  return (
    <>
      <NavMain />
      <FormSearchBug
        inputValue={inputValue}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        setInputValue={setInputValue}
      />
      {validationData ? <BugInformation /> : <div></div>}
    </>
  );
};

export default HomePage;
