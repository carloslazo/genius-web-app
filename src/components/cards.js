import React, { Component } from "react";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFetched: false
    };
  }

  renderDataObject() {
    return this.props.parsedDataObject.map((x, index) => {
      return (
        <div key={index} className="children">
          <div className="grid">
          <div className="title"> {x.annotatable.link_title} </div>
          <img className="picture" src={x.annotatable.image_url} width="92.18" height="87.45"/>
          <div className="fragment"> {x.fragment} </div>
          <div className="annotation">
          {x.annotations[0].body.dom.children.map(x => {
            if (x === "") {
              return null;
            }
            if (typeof x === "object" && x.children !== undefined) {
              const Tag = x.tag
              return (<Tag>{x.children.map(x => {
                if (typeof x === "string") {
                  return x;
                } else if (typeof x === "object" && x.children !== undefined) {
                  const ChildrenTag = x.tag;
                  let attribute =
                    x.attributes !== undefined
                      ? x.attributes.href !== undefined
                        ? x.attributes.href
                        : null
                      : null;
                  return (
                    <ChildrenTag href={attribute}>
                      {x.children.map(x => {
                        if (typeof x === "string") {
                          return x;
                        } else if (x.tag === "br") {
                          return <br/>
                        } else if (
                          typeof x === "object" &&
                          x.children !== undefined
                        ) {
                          return x.children.map(x => {
                            if (typeof x === "string") {
                              return x;
                            } else {
                              return <br/>;
                            }
                          });
                        }
                      })}
                    </ChildrenTag>
                  );
                }
              })

            }</Tag>)}
          })}
          </div>
          </div>
        </div>
      );
    });
  }


  componentDidUpdate(prevProps){
    if (this.props.parsedDataObject !== prevProps.parsedDataObject){
      if (this.props.parsedDataObject !== undefined){
        if (this.props.parsedDataObject.length > 0 ){
          if (this.state.dataFetched === false){
            this.setState({dataFetched: true})
          }
        }
      }
    }

  }

  render() {
    return (
      <div className="parent">
        {this.props.parsedDataObject
          ? this.renderDataObject()
          : null}
      </div>
    );
  }
}

export default Cards;
