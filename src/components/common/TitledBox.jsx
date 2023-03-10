import React from "react"
export default function TitledBox(props) {
  return (
    <>
      <div className="titled_box" id="tip">
        <div id="title">{props.title}</div>
        <div id="content">{props.children}</div>
      </div>
    </>
  )
}
