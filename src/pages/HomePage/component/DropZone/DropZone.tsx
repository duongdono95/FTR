import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./DropZone.scss";
import { FileCheck2, Trash } from "lucide-react";
import { Button } from "@mui/material";
const DropZone = () => {
  const maxSize = null;
  const [myFiles, setMyFiles] = useState<any[]>([]);
  const onDrop = useCallback((acceptedFiles: any) => {
    setMyFiles([...myFiles, ...acceptedFiles]);
  }, []);
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      // accept: ,
      // minSize: 0,
      // maxSize,
    });
  const handleDeleteRequest = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    file: File
  ) => {
    e.stopPropagation();
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    setMyFiles(newFiles);
  };
  return (
    <div {...getRootProps()} className="DropZone">
      <div
        className="content"
        style={{ backgroundColor: isDragActive ? "rgba(5, 171, 163,0.5)" : "" }}
      >
        <input {...getInputProps()} />
        {isDragActive && myFiles.length === 0 && <p>Drop the files here ...</p>}
        {!isDragActive && myFiles.length === 0 && (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
        {!isDragActive && myFiles.length > 0 && (
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
            {myFiles.length > 0 &&
              myFiles.map((file, index) => (
                <div className="file">
                  <p key={index} className="file-name">
                    <span>{index + 1}.</span>
                    {file.name}
                  </p>
                  <div
                    className="trash-icon"
                    onClick={(e) => handleDeleteRequest(e, file)}
                  >
                    <Trash size={16} />
                  </div>
                </div>
              ))}
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        )}
      </div>
      {myFiles.length > 0 && (
        <Button
          variant="text"
          sx={{ color: "red" }}
          onClick={(e) => {
            e.stopPropagation();
            setMyFiles([]);
          }}
          className="remove-all"
        >
          <p>Remove All</p>
        </Button>
      )}
    </div>
  );
};
export default DropZone;
