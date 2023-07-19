import "../styles/index.css";
import React from "react";
import { useSelector } from "react-redux";
import FileStorage from "./FileStorage";
import Sidebar from "../comp/side/Sidebar";

function Main() {
  const data = useSelector((state) => state.blockchain.value);
  const isConnected = data.account !== "";

  return (
    <>
    <Sidebar />

      <h1>IPFS Website Hosting</h1>
      <br />
      <div>
        {isConnected ? (
          <>
            <FileStorage />
          </>
        ) : null}
      </div>
    </>
  );
}

export default Main;
