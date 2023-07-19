import React from 'react'
import { useSelector } from "react-redux"
import Account from "./Account"
import FileStorage from "./FileStorage"
import { Nav, Title, Note } from "./NavbarElements"
import { Link } from 'react-router-dom'




function Main() {
    const data = useSelector((state) => state.blockchain.value)

    const isConnected = data.account !== ""

    return (
        <>
            <h1>Blockchain Cloud Storage</h1>
            <br />
            <div>

                {isConnected ? (
                    <>
                        <FileStorage />
                    </>
                ) : null}

            </div>
            

        </>
    )
}

export default Main