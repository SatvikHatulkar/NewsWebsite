import React from 'react'

const NewsItem = (props) => {
    let { title, description, imgUrl, newsURL, author, date, source } = props;
    return (
        <>
            <div className="my-3">
                <div className="card">
                    <div style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        position: "absolute",
                        right: "0"
                    }}>


                    </div>
                    <div className="card">
                        <img src={imgUrl} className="card-img-top" alt="..." />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ left: "88%", zIndex: "1" }}>
                            {source}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                        <div className="card-body" >
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                            <a rel="noreferrer" target="_blank" href={newsURL} className="btn btn-sm btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsItem