import React, {Component, Fragment} from 'react';
import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';
import Content from './content';
class TambahProyek extends Component {
    render (){
        return (
            <Fragment>
                <Header/>
                <Menu/>
                <Content/>
                <Footer/>
            </Fragment>
        )
    }
}

export default TambahProyek;