import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {

    constructor(){                                    //constructor of News class
       console.log("I am constructor of News component")
       super();             //this is necessary otherwise will get this error "'this' is not allowed before 'super()' "
       this.state={                   //way of using state in class based components like useStates in function based components
          articles:[] , //empty array                             
           page:1,
           //totalResults:
       }
    }
async componentDidMount(){   //lifecycle method that gets called after a component has been rendered to the DOM
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6865fe494053414d9d32407174a03466&page=1&pageSize=20"
    let data=await fetch(url)        //fetches data from that url
    let parsedData=await data.json();    //converts into json format
    //console.log(parsedData)
    this.setState({
      articles:parsedData.articles,     //updates data from that url to this articles array
      totalResults:parsedData.totalResults      //totalResults is number of total adds present in this api link of newsapp.totalResults is a property of a parsed data
    })   
}
//parsedData.articles    articals property of parsedData object

handlePrevClick=async()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6865fe494053414d9d32407174a03466&page=${this.state.page-1}&pageSize=20`   //pageSize means how many adds should be present in one page
  let data=await fetch(url)        //fetches data from that url
  let parsedData=await data.json();    //converts into json format
  //console.log(parsedData)
  this.setState({
    page:this.state.page-1,
    articles:parsedData.articles
    })
}

handleNextClick=async()=>{
  if(this.state.page+1>(Math.ceil(this.state.totalResults/20))){       //this.state.totalResults/20 it gives a total number of pages
//if page number is greater than required pages nothing will happen after clicking on next
  }else{
  let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6865fe494053414d9d32407174a03466&page=${this.state.page+1}&pageSize=20`
  let data=await fetch(url)        //fetches data from that url
  let parsedData=await data.json();    //converts into json format
  console.log(parsedData)
  this.setState({
    page:this.state.page+1,
    articles:parsedData.articles
    }
    )
}
}


  render() {
    return (
      <div className="container my-3">
      <h1>NewsMonkey-Top headlines</h1>
      <div className="row">
      {this.state.articles.map((element)=>{
              
              return   <div className="col mb-4" key={element.url} >   {/*when we are using map we must give a unique key to each element*/}
                 <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                 </div>
      })
      }
       {/* slice()   method is used to display only that much character */}
        {/* {element.title?element.title.slice(0,45):""}   if tittle is null then print empty string same for description*/}
        </div>
        <div className='container d-flex justify-content-between'> 
           <button disabled={this.state.page<=1} onClick={this.handlePrevClick} type="button" className="btn btn-dark">&larr; Previous</button>   
            <button onClick={this.handleNextClick} type="button" className="btn btn-dark">Next &rarr; </button>
        </div>
      </div>
    )
  }
}

export default News
