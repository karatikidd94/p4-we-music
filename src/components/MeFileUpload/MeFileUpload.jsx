import React from "react";
import "./MeFileUpload.css"

export default function MeFileUpload() {
    let fileImage = '';
    let audio = new Audio(fileImage);
    
    function fileSelectedHandler(evt) {
        console.log(evt.target.files[0]);
        fileImage = URL.createObjectURL(evt.target.files[0]);
        console.log(fileImage);
    }
    
    function startMusic() {
        console.log(fileImage);
        audio = new Audio(fileImage);
        console.log("Audio File: ", audio);
        audio.play();
    }

    function pauseMusic(evt) {
        audio = new Audio(fileImage);
        console.log(audio)
        audio.pause();
    }



  
  return (
    <>
        <div>
            <input className="white-txt" type="file" onChange={fileSelectedHandler} />

            <button value={"Play"} onClick={startMusic}>Play</button>
            <button value={"Pause"} onClick={pauseMusic}>Pause</button>
        </div>
    </>
  );
}