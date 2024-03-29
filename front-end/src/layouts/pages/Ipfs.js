import React, { useState } from 'react';
import { FolderUpload } from 'react-ipfs-uploader';

const Ipfs = () => {
    const [folderUrl, setFolderUrl] = useState('')

    return (
        <div>
            <FolderUpload setUrl={setFolderUrl} />
            FolderUrl : <a
                href={folderUrl}
                target='_blank'
                rel='noopener noreferrer'
            >
                {folderUrl}
            </a>
        </div>
    );
}

export default Ipfs;