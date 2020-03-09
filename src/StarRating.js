import React from 'react';

class StarRating extends React.Component{
    constructor(){
        super();
        this.state={
            rating : 0
        }
    }
    UNSAFE_componentWillMount(){
        this.setState({
            rating : Math.round(this.props.StarRating *2)/2
        });
    }
    CreateRating(){
        let starList =[];
        let i;
        if(!isNaN(this.state.rating)){
            for (i = (this.state.rating); i >=1; i--) {
                starList.push(<i className="fa fa-star"aria-hidden="true" style={{color: 'gold'}}></i>);
            }  
            if(i === 0.5) {
                starList.push(<i className="fa fa-star-half-o" aria-hidden="true" style={{color: 'gold'}}></i>);
            }
            for (i = (5 - this.state.rating); i >=1; i--) {
                starList.push(<i className="fa fa-star-o" aria-hidden="true" style={{color: 'gold'}}></i>);
            }
        }else{
          for (i = 5; i >=1; i--) {
            starList.push(<i className="fa fa-star-o" aria-hidden="true" style={{color: 'gold'}}></i>);
          }
        }
        return starList;     
    }
    render() {
        return (
            <div className="rating">
                {this.CreateRating()}
            </div>
        );
    }
}
export default StarRating;