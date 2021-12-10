import React from 'react';


//FOOTER.

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            autor: "Jose Valverde Llobregat"
        };
    }

    render() {
        return (
            <footer><h2>{this.state.autor}</h2></footer>
        )
    }
}

export default Footer;