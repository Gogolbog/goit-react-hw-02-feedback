import { Component } from "react";

export default class FeedbackOptions extends Component {
    
    render() {
        const { options, onLeaveFeedback } = this.props;

        return <ul>{options.map(option => { return <li key={option}><button onClick={onLeaveFeedback} option={option}>{option}</button></li> })}</ul>;
    }
}