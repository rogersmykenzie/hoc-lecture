import React from 'react';
import WithToggle from './WithToggle';

class Typing extends React.Component {
    render() {
        console.log(this.props)
        return(
            <div>
                <input 
                onChange={this.props.toggle}
                />
                {this.props.toggleStatus ? <h1>I toggle my visibility every keystroke</h1> : null}
            </div>
        )
    }
}

export default WithToggle(Typing);