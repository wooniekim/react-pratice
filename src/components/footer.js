import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
    // Copyright에 표시할 현재 년도를 표시하는 함수
    const thisYear = () => {
        const year = new Date().getFullYear();
        return year;
    }
  return (
    <MDBFooter bgColor="light" className="text-center text-black">
      <div
        className="text-center p-3"
      >
        © {thisYear()} Copyright Woonie
      </div>
    </MDBFooter>
  );
};
export default Footer;
