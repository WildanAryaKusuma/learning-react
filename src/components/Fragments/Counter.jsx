import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    render() {
        <>
            <h1>{this.state.count}</h1>
            <button onClick={() => {
                this.setState({count: this.state.count + 1})
            }}>TAMBAH +</button>
        </>
    }
}

export default Counter 