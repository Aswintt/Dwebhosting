import { Web3Storage } from "web3.storage";

const web3storage_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDgxQzI3ZUM5RDkxYjdBZkQ1QzgwNkJFYjhFN2E4MDM1ZUU0QTk3MkIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODEzNzgxMTU0ODEsIm5hbWUiOiJmZHdlYiJ9.MF9Yt7KiAFDCT4-fEpl6IZJiR2X9xhjqiHAnbkGNbo8";

export const IPFS_GATEWAY = "https://ipfs.io/ipfs/";

function GetAccessToken() {
  return web3storage_key;
}

function MakeStorageClient() {
  return new Web3Storage({ token: GetAccessToken() });
}

export const StoreContent = async (content) => {
  console.log("Uploading content to IPFS with web3.storage....");
  const client = MakeStorageClient();
  const cid = await client.put([content]);
  console.log("Stored content with cid:", cid);
  return cid;
};

export const StoreManyFiles = async (files) => {
  console.log("Uploading files to IPFS with web3.storage....");
  const client = MakeStorageClient();
  const cid = await client.put(files);
  console.log("Stored files with cid:", cid);
  return cid;
};
