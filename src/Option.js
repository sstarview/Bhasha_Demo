import React from 'react';
import './Option.css';
import Answer from './Answer';

class Option extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            words: []
        }
    }

    handleChange(e) {

        let words = this.state.words;
        let selected = this.state.selected;
        selected.push(words[e])
        words.splice(e, 1);

        this.setState(words, () => {
            this.setState(selected)

        })
    }

    componentWillReceiveProps(nextProps, nextState) {
        let input = nextProps.input;
        this.setState({
             words: input, 
             selected: [] ,
            });
        return true;
    }

    render() {
        let parent = this.props.parent;
        console.log(this.state.words)
        return (
            <div>
                <Answer selected={this.state.selected} parent={parent} />
                {this.state.words.map((value, index) => {
                    return <button onClick={() => {
                        this.handleChange(index)
                    }} className="option" key={index}>{value}</button>
                })}

            </div>
        )

    };
}

export default Option;