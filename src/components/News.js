import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor() {
    super();
    console.log("Helo i am a constructor from news components.");
    this.state = { articles: [], loading: false, page: 1 };
  }



  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0c94919ccb1b4a50a9dde8f023eb5bfe&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalArticles: parseData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePreviosClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4 ">
                  <NewsItems
                    title={element.title ? element.title : " "}
                    description={
                      element.description ? element.description : "  "
                    }
                    imgUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://static.tnn.in/thumb/msid-98720978,updatedat-1679022949905,width-1280,height-720,resizemode-75/98720978.jpg"
                    }
                    newsUrl={element.url ? element.url : ""}
                    author={element.author ? element.author : "... "}
                    date={element.publishedAt ? element.publishedAt : "... "}
                    source={element.source.name ? element.source.name : " .. "}
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
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalArticles / this.props.pageSize)
            }
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
