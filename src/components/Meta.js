import React from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';

const Meta = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charset="utf-8" />
                <title>{props.title}</title>
                {/* SEO 태그 */}
                <meta name='description' content="{props.description}" />
                <meta name='keywords' content="{props.keywords}" />
                <meta name='author' content="{props.author}" />
                <meta name='og:type' content='website' />
                <meta name='og:title' content="{props.title}" />
                <meta name='og:description' content="{props.description}"/>
                <meta name='og:image' content="{props.image}"/>
                <meta name='og:url' content="{props.url}" />
            </Helmet>
        </HelmetProvider>
    );
};

Meta.defaultProps = {
    title: '카카오검색',
    description: 'React.js로 구현한 카카오 검색 OpenAPI 연동',
    keywords: 'React,Kakao,OpenAPI',
    author: 'heejj',
    image: window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/logo512.png',
    url: window.location.href
}

export default Meta;