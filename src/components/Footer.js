import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";

function Footer() {
  let style = {
    position: "fixed",
    bottom: "0",
    width: "100%",
  };
  return (
    <CDBFooter className="bg-light" style={style}>
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-3"
        style={{ width: "90%" }}
      >
        <CDBBox display="flex" justifyContent="center" className="flex-wrap">
          <CDBBox>
            <CDBBox display="flex" className="mt-1">
              <CDBBtn
                flat
                color="dark"
                className="mx-3"
                href="https://www.linkedin.com/in/pak-sin/"
              >
                <CDBIcon fab icon="linkedin" />
              </CDBBtn>
              <CDBBtn
                flat
                color="dark"
                className="mx-3"
                href="https://github.com/paksin"
              >
                <CDBIcon fab icon="github" />
              </CDBBtn>
              <CDBBtn
                flat
                color="dark"
                className="mx-3"
                href="https://stackoverflow.com/users/20528322/paksin"
              >
                <CDBIcon fab icon="stack-overflow" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center my-1">
          &copy; Pak Sin, 2022. All rights reserved.
        </small>
      </CDBBox>
    </CDBFooter>
  );
}

export default Footer;
