import "../../../styles/index.css";
import React from "react";
import { useSelector } from "react-redux";
import Account from "./Account";
import FileStorage from "./FileStorage";

function Main() {
  const data = useSelector((state) => state.blockchain.value);
  const isConnected = data.account !== "";

  return (
    <>
      <h1>Folder Storage as Zip</h1>
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
