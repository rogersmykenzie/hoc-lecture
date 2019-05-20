import React from 'react';
import WithToggle from './WithToggle';

class Person extends React.Component {
    render() {
        console.log(this.props)
        return(
            <div>
                {this.props.toggleStatus ?
                <> 
                    <h1>My name is {this.props.name}</h1>
                    <h1>I am {this.props.age} years old.</h1>
                    <h1>I am a {this.props.isTall ? "tall" : "short"} person.</h1>
                </>
                : null}
                <button
                onClick={this.props.toggle}
                >Toggle</button>
            </div>
        )
    }
}

export default WithToggle(Person);