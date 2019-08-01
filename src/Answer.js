import React from 'react';

class Answer extends React.Component {

    render() {
        let arr = this.props.selected;

        let initial = this.props.parent;

        let total = '';
        initial.forEach(element => {
            total = total + element
        });

        let deleted = '';
        arr.forEach(element => {
            deleted = deleted + element
        });
    

        let ans = ''
        if (total === deleted) {
            if (arr.length === initial.length) {
                ans = 'match'
            }

        } else {
            if (arr.length === initial.length) {
                ans = 'not match'
            }

        }

        return (
            <div>
                <h3>Answer</h3>
                <div style={{ display: 'flex' }}>
                    {arr.map((data, i) => {
                        return (
                            <div style={{ padding: '20px' }} key={i}>
                                <span>{data}</span>
                            </div>
                        )
                    })}
                </div>
                <h3>{ans}</h3>
            </div>

        );
    }

}

export default Answer;