import React from 'react';

class Ele extends React.Component{
    constructor(props){
        super();
        console.log(props);
       

        this.images=[
            
            
            {src:`/img/camera.jpg`, id:0},
            {src:`/img/cherry.jpg`, id:1},
            {src:`/img/clock.jpg`, id:2},
            {src:`/img/compass.jpg`, id:3},
            {src:`/img/cone.jpg`, id:4},
            {src:`/img/cookie.jpg`, id:5},
            {src:`/img/donut.jpg`, id:6},
            {src:`/img/frog.jpg`, id:7},
            {src:`/img/globe.jpg`, id:8},
            {src:`/img/pencil.jpg`, id:9}
        ]
        var sym=props.symbol;
        let obj = this.images.find(o => o.id === sym);
        console.log(obj);
        var src=obj.src;
        this.state={sr:src,flip:[],count:0}
        console.log("hhhhhhhehehehehe")
        console.log(this.state.sr);
        
    
    
        // const card=document.getElementsByClassName("ele_inner");
        // console.log(card)
        // card.forEach((card)=>{
        //     card.addEventListener('click',function(){
        //         card.classList.toggle('is-flipped');
        //         console.log("daaaamnnnn")
                
        //     })
        // })
        
 
    


    }
    // toggle=(event)=>{
       
    //     console.log(event.target);
    //     event.target.parentElement.classList.toggle("is-flipped");
    //     this.props.choose(this.props.symbol);
    
    
    //     }
    handleClick = (event) =>{
        this.props.choose(this.props.symbol,event);
    }
 


        
    



    


           
 
    






    render(props){
        return(
            <div  className="ele" onClick={this.handleClick} symbol={this.props.symbol}>
                 
                        <div className="ele_inner" >
                            <div className=" ele-face front-face"   >
                              
                            </div>
                            <div className=" ele-face back-face" style={{ 
      backgroundImage: `url(${this.state.sr})`,backgroundSize:"cover" ,backgroundPosition:"center"}}  >
                                {/* <img src={this.state.sr}></img>
         */}
                            </div>
                
                        </div>
                
             </div> 
            
        )
    }
}
export default Ele;
