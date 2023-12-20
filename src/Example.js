import React from "react";

export default function Example(props) {
  if (props.definition.example) {
    return (
      <div className='Example'>
        {props.examples.map(function (exampleElement, index) {
          return <div key={index}>{exampleElement}</div>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
