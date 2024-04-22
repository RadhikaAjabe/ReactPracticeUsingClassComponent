import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl}=this.props
    return (
      <div className="my-3">
         <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl?"https://www.thewowstyle.com/wp-content/uploads/2015/01/images-of-nature-4.jpg":imageUrl} className="card-img-top" alt="..."/>
            {/* if imageUrl is null it will use this image as default image */}
            <div className="card-body">
                <h5 className="card-title"> {title}... </h5>
                <p className="card-text"> {description}... </p>
               <a href={newsUrl} className="btn btn-dark">Read more</a>
                {/* <a href={newsUrl} target="_blank" className="btn btn-primary">Read more</a>    */}
            </div>
         </div>
      </div>
    )
  }
}
