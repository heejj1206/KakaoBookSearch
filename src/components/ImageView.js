import React from 'react';
import dayjs from 'dayjs';

import style from '../assets/scss/style.module.scss';
import noimg from '../assets/img/noimg.png';

const ImageView = ({documents}) => {
    return (
        <div className={style.imageList}>
            {documents.map((item, index) => (
                <div className={style.imageItem} key={index}>
                    <a href={item.doc_url}>
                        <div className={style.imgArea}>
                            <img src={item.thumbnail_url ? item.thumbnail_url : noimg}
                                onError={ (e) => e.currentTarget.src = noimg }
                                alt={item.title} />
                        </div>
                        <div className={style.testArea}>
                            <h4>{item.display_sitename}</h4>
                            <ul>
                                <li>{item.collection}</li>
                                <li>{item.width}x{item.height}</li>
                                <li>{dayjs(item.datetime).format("YYYY-MM-DD hh:mm")}</li>
                            </ul>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};

ImageView.defaultProps = {
    documents: []
}

export default ImageView;