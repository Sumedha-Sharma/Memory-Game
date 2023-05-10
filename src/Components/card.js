import React from 'react';
import Ele from './ele';


class Card extends React.Component{
    constructor(props){
        super();
        console.log(props);
        this.images=[
            {src:`./camera.jpg`, id:0},
            {src:`./cherry.jpg`, id:1},
            {src:`./clock.jpg`, id:2},
            {src:`./compass.jpg`, id:3},
            {src:`./cone.jpg`, id:4},
            {src:`./cookie.jpg`, id:5},
            {src:`./donut.jpg`, id:6},
            {src:`./camer.jpg`, id:7},
            {src:`./camera.jpg`, id:8},
            {src:`./camera.jpg`, id:9}
        ]
        this.state = {choiceOne : null, choiceTwo : null}
    }

handleChoice=(card,event)=>{
    console.log(event.target.parentElement);
    event.target.parentElement.classList.add("is-flipped");
    (this.state.choiceOne === null) ? this.setState({choiceOne : card}) : this.setState({choiceTwo : card});
    // setTimeout(()=>{
    // if(this.state.choiceOne!==null && this.state.choiceTwo!==null){
    //     console.log("comparing");
    //   if(this.state.choiceOne!==this.state.choiceTwo){
       
    //         console.log("not matched");
    //         var elements=document.getElementsByClassName("is-flipped");
    //         this.setState({choiceOne : null, choiceTwo : null});
    //         elements[0].classList.remove("is-flipped");
    //         elements[1].classList.remove("is-flipped");
            
    //   }
    // }
    //     },3000);
    setTimeout(()=>{
        if(this.state.choiceOne!==null && this.state.choiceTwo !== null){
            console.log("comparing")
            if(this.state.choiceOne !== this.state.choiceTwo){
                var elements = document.getElementsByClassName("is-flipped");
                elements[elements.length-1].classList.remove("is-flipped");
                elements[elements.length-1].classList.remove("is-flipped");
            }
            this.setState({choiceOne : null, choiceTwo : null});
        }
    },2000)



      }


           
   






    render(props){
        console.log(this.state.choiceOne, this.state.choiceTwo);
        return(
            <div className='ele-con'>
                {
                this.props.array.map((val,index,arr)=>{
                    
                    let sym = arr[index];
                    return <Ele key={index}  symbol= {sym} array={arr} choose = {this.handleChoice} />

                })
                }
          
        
            
            </div>
        )
    }
}
export default Card;
