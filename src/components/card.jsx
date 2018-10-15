import React, { Component } from "react";
class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDataObject() {
    return this.props.parsedDataObject.map((x, index) => {
      let mapChildren = () =>
        x.annotations[0].body.dom.children.map(p => {
          return p.children !== undefined
            ? typeof p.children[0] === "string"
              ? p.children[0]
              : null
            : null;
});

      return (
        <div key={index}>
          <p> {x.annotatable.link_title}</p>
          <p> {x.fragment}</p>
          <p> {x.annotatable.url}</p>
          <p> {x.annotatable.image_url}</p>
          <p> {mapChildren()}</p>
          <p>----------------------------------------------------</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.props.parsedDataObject === undefined
          ? null
          : this.renderDataObject()}
      </div>
    );
  }
}

export default Cards;
