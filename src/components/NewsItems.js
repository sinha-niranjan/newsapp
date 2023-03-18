import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card my-2">
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger "
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
          </span>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description} </p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a
              rel="nonreference"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
