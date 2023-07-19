import React from 'react'
import "./Sidebar.css"
import { useSelector } from "react-redux";
import Account from '../../components/Account';
import { Link } from "react-router-dom";



function Sidebar() {
    const data = useSelector((state) => state.blockchain.value);
    const isConnected = data.account !== "";
    return (
        <>

            <div className="wrapper">
                <div className="section">
                    <div className="top_navbar">
                        {/* <div className="hamburger">
                            <a href="#">
                                <i className="fas fa-bars"></i>
                            </a>
                        </div> */}
                        <div className='nav-content'>
                            <center>
                                <div className="note">
                                    {isConnected ? (
                                        <p>
                                            Note: You are currently connected to the{" "}
                                            {data.network ? data.network : "unknown"} network
                                        </p>
                                    ) : (
                                        <p>Please connect your wallet</p>
                                    )}
                                    <span>               </span>
                                </div>
                            </center>
                            <Account />
                        </div>
                    </div>

                </div>
                <div className="sidebar">
                    <div className="profile">
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <img src="https://www.xilinx.com/content/xilinx/en/products/design-tools/resources/the-developers-guide-to-blockchain-development/_jcr_content/root/parsysFullWidth/xilinxflexibleslab/xilinxflexibleslab-parsys/xilinxcolumns_397154/childParsys-0/xilinximage_copy_cop.img.png/1644357944737.png" alt="profile_picture" />
                            <h3>DWEB</h3>
                            <p>a Blockchain NET</p>
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link to="/home" style={{ textDecoration: 'none' }}>
                                <span className="icon"><i className="fas fa-home"></i></span>
                                <span className="item">Home Info</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/webhost" style={{ textDecoration: 'none' }}>
                                <span class="icon"><i class="fas fa-database"></i></span>
                                <span className="item">Host Website</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/zipdrive" style={{ textDecoration: 'none' }}>
                                <span className="icon"><i className="fas fa-user-friends"></i></span>
                                <span className="item">Zip Drive</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/singledrive" style={{ textDecoration: 'none' }}>
                                <span className="icon"><i className="fas fa-desktop"></i></span>
                                <span class="item">Single Drive</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/qrcode" style={{ textDecoration: 'none' }}>
                                <span className="icon"><i className="fas fa-tachometer-alt"></i></span>
                                <span className="item">QRGenerator</span>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Sidebar