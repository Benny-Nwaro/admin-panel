import React from "react";
import KeywordInput from "./KeywordInput";
import NextButton from "./NextButton";
import KeywordAnalysis from "./KeywordAnalysis";

const Keyword: React.FC = () => {
  return (
    <div>
        <KeywordAnalysis/>
        <KeywordInput/>
        <NextButton/>
    </div>
  );
};

export default Keyword;
