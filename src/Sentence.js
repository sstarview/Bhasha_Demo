import React from 'react';
import Option from './Option';

class Sentence extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            value: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            input: e.target.value,
        });

    }
    
    handleClick() {
        this.setState({
            value: this.state.input,
        });
    }

    rearrange(w) {
        w.sort();
        w.reverse();
        return w;
    }

    render() {
        const sentence = this.state.value;
        const words = sentence.split(" ");

        return (
            <div>
                <input value={this.state.input} onChange={this.handleChange} />
                <button onClick={() => { this.handleClick() }}>Click</button>
                <Option input={this.rearrange(words)} parent={this.state.input.split(" ")} />
            </div>
        );
    }
}

export default Sentence;