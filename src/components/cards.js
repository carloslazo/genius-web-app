import React, { Component } from "react";
import YouTube from "react-youtube";
import TweetEmbed from "react-tweet-embed";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDataObject() {
    return this.props.parsedDataObject.map((x, index) => {
      return x === undefined ? null:
       (
        <div key={index} className="children">
          <div className="grid">
            <div className="title"> {x.annotatable.link_title} </div>
            <img
              className="picture"
              src={x.annotatable.image_url}
              width="92.18"
              height="87.45"
            />
            <div className="fragment"> {x.fragment} </div>
            <div className="annotation">
              {x.annotations[0].body.dom.children.map(x => {
                if (x === "") {
                  return null;
                }
                if (typeof x === "object" && x.children !== undefined) {
                  const Tag = x.tag;
                  return (
                    <Tag>
                      {x.children.map(x => {
                        if (typeof x === "string") {
                          return x;
                        } else if (
                          typeof x === "object" &&
                          x.children !== undefined
                        ) {
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

                                  if (
                                    x.includes("youtu.be") ||
                                    x.includes("youtube")
                                  ) {
                                    const opts = {
                                      height: "200",
                                      width: "300"
                                    };
                                    let copy = x.split("");
                                    copy =  x.includes("youtu.be") ? copy.splice(16).join("") : copy.splice(32).join("")
                                    return (
                                      <div>
                                        <br />
                                        <YouTube videoId={copy} opts={opts} />
                                        <br />
                                      </div>
                                    );
                                  }
                                  if (x.includes("twitter")) {
                                    let copy = x.split("");
                                    copy = copy.splice(36).join("");
                                    return <TweetEmbed id={copy} />;
                                  }
                                  return x;
                                } else if (x.tag === "br") {
                                  return <br />;
                                } else if (
                                  typeof x === "object" &&
                                  x.children !== undefined
                                ) {
                                  return x.children.map(x => {
                                    if (typeof x === "string") {
                                      return x;
                                    } else {
                                      return <br />;
                                    }
                                  });
                                }
                              })}
                            </ChildrenTag>
                          );
                        }
                      })}
                    </Tag>
                  );
                }
              })}
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="parent">
        {this.props.parsedDataObject ? this.renderDataObject() : null}
      </div>
    );
  }
}

export default Cards;
