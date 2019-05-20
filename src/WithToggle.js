import React from 'react';

const WithToggle = Component => {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                toggleStatus: true
            }
        }

        toggle = () => {
            this.setState({toggleStatus: !this.state.toggleStatus})
        }

        render() {
            return(
                <>
                    <Component 
                    {...this.props}
                    toggleStatus={this.state.toggleStatus}
                    toggle={this.toggle}
                    />
                </>
            )
        }
    }
}

export default WithToggle