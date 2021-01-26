import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <i className="navbar-logo fas fa-leaf"></i>
                <span>habitTracker</span>
                <span className="navbar-count">
                    {/* //props로 totalCount를 전달 */}
                    {this.props.totalCount}    
                </span>  
            </div>
        );
    }
}

export default Navbar;