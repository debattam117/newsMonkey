import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner.js'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export default class News extends Component {

    static defaultProps={
        country:'in',
        pageSize:6,
        category: 'general'
    }

    static propTypes={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string

    }


     capitalFirst=(string)=>
    {
           return string.charAt(0).toUpperCase()+string.slice(1);
    }

    
  constructor(props)
  {
   super(props);
   this.state={
     articles:[], //this.articles, //we are now not fetching from the array articles 
     loading:false,
     page:1,
     totalResults:0
   }

   document.title=`${this.capitalFirst(this.props.category)} - NewsMonkey`;

  }

   /*async componentDidMount()
  {
    let urls="https://newsapi.org/v2/everything?q=apple&from=2023-08-14&to=2023-08-14&sortBy=popularitycategory=${this.props.category}&apiKey=b6dd62f2eb3041729cf2b7488b5c315e";
    fetch(urls)

    .then(data =>data.json())
      .then(res=> {this.setState({articles: res.articles})
       })

      console.log(this.articles)
  }*/

// Another way to use fetchapi 

async updateNews() {

  this.props.setProgress(10);
  let urls=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b6dd62f2eb3041729cf2b7488b5c315e&page=1&pageSize=${this.props.pageSize}`;
  this.setState({loading:true})
  let data=await fetch(urls);
  this.props.setProgress(30);
  let parsedData=await data.json();
  this.props.setProgress(70);
  this.setState({articles:parsedData.articles, totalresults:parsedData.totalResults,loading:false})
  console.log(data)
  this.props.setProgress(100);

}


  async componentDidMount()
  {
    
    this.updateNews();

  }


    handlePrevClick = async ()=>{
    
    this.setState({page:this.state.page-1,})
    this.updateNews();

    }

    handleNextClick = async ()=>{
      this.setState({page:this.state.page+1,})
      this.updateNews();
  
    }

    fetchMoreData = async () => {
      
      this.setState({page:this.state.page+1,})
      let urls=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b6dd62f2eb3041729cf2b7488b5c315e&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data=await fetch(urls);
      let parsedData=await data.json();
      this.setState({articles:this.state.articles.concat(parsedData.articles), totalresults:parsedData.totalResults,loading:false})
      
      
    }

  render() {
    return (
        <div className='Container1' style={{}}>
      <div className="Containermain" style={{width:"1700px",margin:"auto"}} >
        <h2 style={{paddingTop:"50px",paddingBottom:"50px", marginLeft:"460px",fontSize:"40px"}}>NewsMonkey - Top Headlines on {this.capitalFirst(this.props.category)}</h2>
        {this.state.loading&&<Spinner/>}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults}
          loader={<Spinner/>}
        >

           <div className='row' style={{justifyContent:"between"}}>
               {this.state.articles.map((element)=>{
                 return <div className='col-md-4' key={element.url} >
                           <Newsitem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,100):""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} alt="1"/>
                        </div>
               })}
           </div>
         </InfiniteScroll>
           

      </div>
      </div>
    )
  }
}
