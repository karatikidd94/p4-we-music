import React, { useState } from "react";


export default function FileUpload() {
  const [input, setInput] = useState([]);

  function _treat(e) {
    const { files } = e.target;
    let images = [];
    const selecteds = [...[...files]];

    selecteds.forEach(i => images.push(URL.createObjectURL(i)));

    setInput(images);
    console.log(images);
  }

  // const fileImage = URL.createObjectURL("Screen Shot 2022-08-17 at 8.39.29 AM.png");

  return (
    <>
        <div className="App">
        <input type="file" accept="image/*" multiple onChange={_treat} />
        {input.map(i => (
            <img key={i} src={i} style={{ height: 300 }} alt="" />
        ))}
        </div>
        {/* <div>
            <img src={fileImage} />
        </div> */}
    </>
  );
}