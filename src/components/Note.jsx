import React from "react";

function content(props) {
  return (
    <div>
      <div class="inline">
        <h4 class="headerFour">
          <span  className="badge badge-warning" style={{backgroundColor: props.no===0?"yellow":"blue"}}>
            {props.no === 0 ? "Zero" : props.no}
           
          </span>
        </h4>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={() => {
            props.itemIncrease(props.no);
          }}
        >
          Increase
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={() => {
            props.itemDecrease(props.no);
          }}
        >
          Decrease
        </button>
        <button type="button" class="btn btn-danger btn-sm" onClick={() => {
props.onDelete(props.id);
        }}>
          Delete All
        </button>
      </div>
    </div>
  );
}

export default content;
