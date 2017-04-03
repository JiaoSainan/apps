import React, {Component} from 'react';
import '../conponent/home_page.css';



export default class Manage extends Component {
    constructor(props) {
        super(props);
        this.changeIndex=this.changeIndex.bind(this);
    }

    render() {
        return (

                <li onClick={this.changeIndex}>
                   <span> {this.props.student.sname}</span>
                </li>
        )
    }

    changeIndex(val,index){
        this.props.changeContorl(this.props.index)
        this.props.showMask(this.props.student)
    }
}