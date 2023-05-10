import React from 'react';
import Card from './card'
import { ReactDOM } from 'react';
class Picker extends React.Component{
    constructor(props){
        super();
        this.state = { display:"none", display2:"flex",arr:[]};
    }

    click = () => {
        var sel=document.getElementById("ncards").value;
    
            var chosen=[];
           console.log(chosen);
           
           var count =0;
           var count2=0;
           while(count<sel){
               var rand=Math.floor(Math.random() * 10);
               if(!(chosen.includes(rand))){
                   chosen.push(rand);
                   console.log("hehe");
                   count++;
                   console.log(chosen[count]);
               }
           }
           chosen=[...chosen,...chosen]
           for (let i = chosen.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [chosen[i], chosen[j]] = [chosen[j], chosen[i]];
        }
          console.log(chosen);
           
   
           
       



        this.setState({display:"flex", selVal:sel,display2:"none",arr:chosen});
    }

    render(props){
        return(
            <div  className='con'>
                <div className='picker' style={{display:this.state.display2}}>
                <select name="ncards" id="ncards">
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                </select>
                <button onClick={this.click}>
            Play!!
                </button>
                </div>
                <div  style={{display:this.state.display}}className='card'>
                <Card display={this.state.display}  array={this.state.arr}/>
                </div>
                
              
                </div>
        )
          
            
    }
}
export default Picker;
