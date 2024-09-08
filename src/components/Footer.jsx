import React from "react";
import Container from "./Container";

const Footer = () => {
  const date = new Date();
  return (
    <Container>
    <footer className=" mt-auto bg-blue-200 text-slate-600 rounded-md text-center py-2 w-full md:w-[720px]  lg:w-[1000px] transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-100">
      © {date.getFullYear()}{" "}
      <a href="https://mms-it.com" className=" underline text-blue-700">
        MMS IT
      </a>
      . All rights reserved.
    </footer>
    </Container>
  );
};

export default Footer;
