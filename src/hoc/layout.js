import React from 'react';



class Layout extends React.Component {
    render() { 
        return (
    <React.Fragment>
        <div>
            {/* <Header /> */}
            <div className="page_container">{this.props.children}</div>
             
            {/* <Footer /> */}
        </div>
    </React.Fragment>
        )
    }
}
 
export default Layout;