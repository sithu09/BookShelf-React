import React, { Component } from 'react'
import * as firebase from 'firebase'
import '../css/Showpage.css'

class Essay extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           words:[]
        }
      }
      componentDidMount(){
          const wordRef=firebase.database().ref("React/Essay");
          wordRef.on('value',(snapshot)=>{
              let words=snapshot.val();
              let newstate=[];
              for(let word in words){
                  newstate.push({
                    link:words[word].link,
                      photo:words[word].photo,
                      proposal:words[word].proposal,
                      title:words[word].title
                  });
              }
              this.setState({
                  words:newstate
              });
          });
      }
      render() {
          return (
              <div>
                 
                 {this.state.words.map((word)=>{
                     return(
                      <div >
                                       <div className="font"> 
                                           <p><b>စာအုပ်အမည် - </b>{word.title}</p>
                                           <p ><b>Review - </b>{word.proposal}</p>
                                           <p ><b>Link - </b>{word.link}</p>
                                          {/* <p><img src="{word.photo}"></img></p> */}
                                         <p ><img  alt="900x500"  src={word.photo}/></p> 
                                         {/* style={{textAlign:"center"}} */}
                                         <hr></hr>
                                           </div> 
                                      </div>
                     )
                 })}
          
              </div>
          )
      }
  }

export default Essay
