import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
 

  const capatalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  const updateNews = async () => {
    props.setProgress(10);
    // console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true)
    props.setProgress(50);
    let data = await fetch(url);
    props.setProgress(70);
    let dataParse = await data.json()
    // console.log(dataParse)
    setArticles(dataParse.articles)
    setLoading(false)
    setTotalResults(dataParse.totalResults)

    props.setProgress(100);
  }

  useEffect(() => {
     document.title = `News Unfiltered ||  ${capatalizeFirstLetter(props.category)}`;
    updateNews();
    // eslint-disable-next-line
  }, [])

  // const handlePreviousClick = async () => {
  //   setPage(page-1)
  //   updateNews()
  // }
  // const handleNextClick = async () => {
  //   setPage(page+1)
  //   updateNews()
  // }

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pagesize}`;
    setPage(page+1)
    let data = await fetch(url);
    let dataParse = await data.json()
    // console.log(dataParse)
    setArticles(articles.concat(dataParse.articles))
    setTotalResults( dataParse.totalResults)
  };



  return (
    <>
      <div className="display-6 text-center"  style={{marginTop:"5vw"}}><b>News Unfiltered-Top {capatalizeFirstLetter(props.category)} Headlines</b></div>
      {/* <div className='text-center'>{.loading && <Spinner />}</div> */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<h4 className='text-center'><Spinner /></h4>}
      >
        <div className="container">
          <div className="row my-3">
            {articles.map((element) => {
              return <div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage ? element.urlToImage : "https://thumbs.dreamstime.com/z/news-green-chalkboard-word-hand-written-school-33063676.jpg"} newsURL={element.url ? element.url : ""} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
            <button disabled={.page <= 1} type="button" onClick={handlePreviousClick} className="btn btn-dark">&larr; Previous</button>
            <button disabled={null} type="button" onClick={handleNextClick} className="btn btn-dark">Next &rarr;</button>
          </div> */}

    </>
  )
}

News.defaultProps = {
  country: "in",
  pagesize: 8,
  category: "general"
}
News.porpTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string
}

export default News