import React, {Component} from 'react';
import './home_page.css';
export default class leftBoxBotm extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
           <li onClick={()=>this.props.changeIndex(this.props.index)}
               style={this.props.clickedStudent==this.props.index?{backgroundColor:"#eed63b",color:"#323433",fontWeight:"bolder"}:{}}>
               {
                   this.props.student.sname
               }
           </li>

        );
    }


}
/*
{backgroundColor:this.props.clickedStudent==this.props.index?"#eed63b":"",color:this.props.clickedStudent==this.props.index?"#323433":"",fontWeight:this.props.clickedStudent==this.props.index?"bold":""}}*/
