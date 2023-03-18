import React, { useEffect,useLayoutEffect,useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) =>{
  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults] =  useState(0)

  // document.title = `${capitalizeFirstLetter(
  //     props.category
  //   )} - NewsMonkey`;

  const capitalizeFirstLetter =(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const  updateNews = async() => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);

    let parseData = await data.json();
    props.setProgress(70);
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    setPage(page+1)
    console.log("i am update");
    
    props.setProgress(100);
  }
  useEffect(()=>{
    updateNews();
  },[])

  const handlePreviosClick = async () => {
    setPage(page-1);
    updateNews();
  };
  const handleNextClick = async () => {
    setPage(page+1);
    updateNews();
  };

  const fetchMoreData = async () => {
    setPage(page+1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parseData = await data.json();
    console.log("fetch ");
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
  };

  
    return (
      <>
        <h1 className="text-center">
          NewsMonkey - Top {capitalizeFirstLetter(props.category)}{" "}
          Headlines
        </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length != totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
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
                      source={
                        element.source.name ? element.source.name : " .. "
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* {state.loading && <Spinner />} */}
      </>
    );
  }


News.defaultProps = {
  country:"in",
  pageSize:"6",
  category:"general",
}

News.propTypes = {
  country : propTypes.string,
  pageSize : propTypes.number,
  category : propTypes.string,
}

export default News;
