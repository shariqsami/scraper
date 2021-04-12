import React, { Component } from "react";
import { format } from "date-fns";

import { Content } from "./styles";

const SoldBy = ({ agent, source }) => {
  if (agent !== "") {
    return (
      <React.Fragment>
        by <span>{agent}</span>
      </React.Fragment>
    );
  }
  if (source !== "") {
    return (
      <React.Fragment>
        according to <span>{source}</span>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      by <span>Unknown agent</span>
    </React.Fragment>
  );
};

class History extends Component {
  render() {
    return (
      <Content>
        {this.props.history.map((history) =>
          history.event === "Built" ? (
            <p>
              <span>{format(new Date(history.time / 1000), "MM/dd/yyyy")}</span>|<span>{history.time}</span>|
              <span>{history.event}</span>
            </p>
          ) : (
            <p>
              <span>{format(new Date(history.time / 1000), "MM/dd/yyyy")}</span>|<span>{history.event}</span>
              <SoldBy agent={history.agent} source={history.source} />
              {history.event === "Sold" ? "for" : "asking"}
              <span>${history.price}.</span>
            </p>
          )
        )}
      </Content>
    );
  }
}

export default History;
