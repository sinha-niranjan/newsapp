import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  constructor() {
    super();
    console.log("Helo i am a constructor from news components.");
    this.state = { articles: [], loading: false, page: 1 };
  }

  async componentDidMount() {
    console.log("cdm");
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=0c94919ccb1b4a50a9dde8f023eb5bfe&page=1&pageSize=20";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalArticles: parseData.totalResults,
    });
  }

  handlePreviosClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0c94919ccb1b4a50a9dde8f023eb5bfe&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles, page: this.state.page - 1 });
  };
  handleNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalArticles / 20)) {
      console.log("Over pafg");
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0c94919ccb1b4a50a9dde8f023eb5bfe&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parseData = await data.json();
      console.log("next");
      this.setState({
        articles: parseData.articles,
        page: this.state.page + 1,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div key={element.url} className="col-md-4 ">
                <NewsItems
                  title={element.title ? element.title.slice(0, 45) : " "}
                  description={
                    element.description
                      ? element.description.slice(0, 88)
                      : "  "
                  }
                  imgUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://static.tnn.in/thumb/msid-98720978,updatedat-1679022949905,width-1280,height-720,resizemode-75/98720978.jpg"
                  }
                  newsUrl={element.url ? element.url : ""}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between ">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.handlePreviosClick}
            className="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button
            type="button"
            onClick={this.handleNextClick}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
