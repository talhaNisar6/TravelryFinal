import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <div className="container-fluid">
        <div className="expense-item row">
          <div className="col-md-1">
            <ExpenseDate date={props.date} />
          </div>
          <div className="col-md-11">
            <h2 className="title-h2">{props.title}</h2>
            <div className="paragraph-p">
              <p>{props.amount}</p>
            </div>
            </div>
          </div>
        </div>
    </li>
  );
};

export default ExpenseItem;
