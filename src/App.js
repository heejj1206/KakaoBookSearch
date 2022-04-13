import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import qs from 'qs';

import Meta from './components/Meta';
import Top from './components/Top';

import BookPage from './pages/BookPage';

import style from './assets/scss/style.module.scss';

const App = () => {
    //top.js에서 클릭된 링크에 의해 전달되는 QueryString을 추출
    const { search } = useLocation();

    //추출된 querystring을 json 객체로 파싱하고 key가 query인 값만 추출
    const { query } = qs.parse(search, { ignoreQueryPrefix: true });


    return (
        <div className={style.container}>
            <Meta />
            <Top />

            <Routes>
                <Route path="book" element={<BookPage query={query} />} />
            </Routes>
        </div>
    );
};

export default App;