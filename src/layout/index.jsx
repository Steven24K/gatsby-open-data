import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import NavBar from "../components/NavBar/NavBar";
import "./index.css";

export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>

      <NavBar />

      <div className='content'>
        {children}
      </div>
    </div>
  );
}
