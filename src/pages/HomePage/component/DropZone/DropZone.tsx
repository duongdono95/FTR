import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./DropZone.scss";
import { FileCheck2 } from "lucide-react";
const DropZone = () => {
  const maxSize = null;
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      // accept: ,
      // minSize: 0,
      // maxSize,
    });
  return (
    <div {...getRootProps()} className="DropZone">
      <div
        className="content"
        style={{ backgroundColor: isDragActive ? "rgba(5, 171, 163,0.5)" : "" }}
      >
        <input {...getInputProps()} />
        {isDragActive && acceptedFiles.length === 0 && (
          <p>Drop the files here ...</p>
        )}
        {!isDragActive && acceptedFiles.length === 0 && (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
        {!isDragActive && acceptedFiles.length > 0 && (
          <div className="output">
            <div
              className={
                acceptedFiles.length > 0
                  ? "icon-wrapper success"
                  : "icon-wrapper"
              }
            >
              <FileCheck2 stroke-width={2.5} />
            </div>
            {acceptedFiles.length > 0 &&
              acceptedFiles.map((file, index) => (
                <p key={index} className="file-name">
                  <span>{index + 1}.</span>
                  {file.name}
                </p>
              ))}
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default DropZone;
