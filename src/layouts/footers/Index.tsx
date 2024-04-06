import React from "react";
import DefaultFooter from "./DefaultFooter";
import Footer2 from "./Footer2";
import { LayoutProps } from "@/src/types/types";

const Footer = ({ footer }: LayoutProps) => {

  switch (footer) {
    case 1:
      return <DefaultFooter />;
    case 2:
      return <Footer2 />;
    default:
      return <DefaultFooter />;
  }
};
export default Footer;
