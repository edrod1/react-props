import React from "react";
import ReactDOM from "react-dom";


function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img
        src={props.img}
        alt="avatar_img"
      />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}


ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Ryan Reynolds"
      img="https://bit.ly/3wkAfAl"
      tel="+123 456 789"
      email="R@Reynolds.com"
    />
    <Card
      name="Katt Williams"
      img="https://s3.amazonaws.com/oratv-admin-wysiwyg/2017/12/13/96f7023fa185a99b69161d3a7904d118.jpg"
      tel="202-555-0163"
      email="Katt@Katty.com" />
    <Card
      name="Elon Musk"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtrXm5uD9r1hTolGGhnsN7NeBU8Zxs_zfgA&usqp=CAU"
      tel="+321 123 212"
      email="Tesla@Elonm.com"
    />
    <input id="fName" />

  </div>,
  document.getElementById("root")
);
