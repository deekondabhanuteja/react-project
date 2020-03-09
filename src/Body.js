import React from 'react';
import StarRating from './StarRating'

class Body extends React.Component{
   constructor(){
       super();
       this.state = {
            ramenList : [],
       }
       this.handleChnage = this.handleChnage.bind(this);
       this.topTen = this.topTen.bind(this);
       this.country = this.country.bind(this);
       this.package = this.package.bind(this);
   }
   UNSAFE_componentWillMount(){
       fetch('http://starlord.hackerearth.com/TopRamen')
       .then(response => response.json())
       .then((data) => {    
           this.setState({
                ramenList : data,
           });
       })
       .catch((errmsg) => {
           console.log("We got an issue :" + errmsg);
       })
   }
   handleChnage(event){
    var targetSearch = event.target.value;
    this.setState({
            ramenList: this.state.ramenList.filter((list) =>{
                return list.Brand.toLowerCase().includes(targetSearch);
            })
       });
   }
   topTen(event){
    var topTen = event.target.value;
    this.setState({
         ramenList: this.state.ramenList.filter((list) =>{
             return list["Top Ten"].slice(6, 8) === topTen.slice(6,8);
         })
    });
}
country(event){
    var country = event.target.value;
    this.setState({
         ramenList: this.state.ramenList.filter((list) =>{
             return list.Country === country;
         })
    });
}
package(event){
    var style = event.target.value;
    this.setState({
         ramenList: this.state.ramenList.filter((list) =>{
             return list.Style === style;
         })
    });
}
   render(){
       return (
           <div>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            <div className="header">
                <div className="header--left">
                    <input type="text" onChange={this.handleChnage}/>
                </div>
            </div>
            <div  className="hotel-list">
                {this.state.ramenList.map((list,i) =>{
                    return (
                        <div className="wrapper" key={i}>
                            <div className="head">
                                <h1 className="head__tittle">
                                    {list.Brand}
                                </h1>
                                <span className="head__top-ten--tip">
                                    <button className="btn btn__top-ten" onClick={this.topTen} value={list["Top Ten"]}>{list["Top Ten"]}</button>
                                </span>
                            </div>
                            <div className="body">
                                <ul>
                                    <li>
                                        <button onClick={this.country} name="country" value={list.Country} className="body__country">
                                            <span role="img" aria-label="earth_asia" className="earth_asia">🌏</span>
                                            {list.Country}
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={this.package} name="package" value={list.Style} className="body__packStyle">
                                            <span role="img" aria-label="package" className="package">📦</span>
                                            {list.Style} 
                                        </button>
                                    </li>
                                    <li>
                                        <button className="body__variety">
                                            <span role="img" aria-label="stew" className="stew">🍲</span>
                                            {list.Variety}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer">
                                <ul>
                                    <li>
                                        <StarRating StarRating={list.Stars}></StarRating>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
          </div>
       );
   }
}
export default Body;