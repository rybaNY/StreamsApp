import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../components/Header';
import StreamCreate from '../components/streams/StreamCreate';
import StreamDelete from '../components/streams/StreamDelete';
import StreamEdit from '../components/streams/StreamEdit';
import StreamList from '../components/streams/StreamList';
import StreamShow from '../components/streams/StreamShow';


const App = () => {
    return (
        <BrowserRouter>
            <div className='ui container'>
                <Header />
                <Route path='/' exact component={StreamList} />
                <Route path='/streams/new' component={StreamCreate} />
                <Route path='/streams/delete' component={StreamDelete} />
                <Route path='/streams/edit' component={StreamEdit} />
                <Route path='/streams/show' component={StreamShow} />
            </div>
        </BrowserRouter>
    )
}

export default App;