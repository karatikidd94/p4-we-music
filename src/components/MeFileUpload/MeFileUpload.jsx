import React, { useState } from "react";


export default function MeFileUpload() {

    function fileSelectedHandler(evt) {
        console.log(evt.target.files[0]);
        const fileImage = URL.createObjectURL(evt.target.files[0]);
        console.log(fileImage);
    }
  
  return (
    <>
        <div>
            <input type="file" onChange={fileSelectedHandler} />
        </div>
        <div>
            {/* <img src={fileImage}/> */}
        </div>
    </>
  );
}