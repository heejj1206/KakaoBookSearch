import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getBookList } from '../slices/BookSlice';
import { Oval } from 'react-loader-spinner';
import ListView from '../components/ListView';

import style from '../assets/scss/style.module.scss';

const BookPage = ({query}) => {
    const [page, setPage] = useState(1);


    //리덕스 스토어에 저장되어 있는 상태값 받기
    const { rt, rtmsg, item, loading } = useSelector((state) => state.book);


    //액션함수를 호출하기 위한 디스패치 함수 생성
    const dispatch = useDispatch();

    useEffect(() => {
        setPage(1);
        dispatch(getBookList({ query: query, page: page }));
    }, [query]);

    useEffect(() => {
        if (!loading) {
            dispatch(getBookList({ query: query, page: page }));
            console.log(item.documents);
        }
    }, [dispatch, page]);

    return (
        <div>
            {loading && (
                <Oval
                    color="#ff6600"
                    height={100}
                    width={100}
                    wrapperStyle={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        marginLeft: '-50px',
                        marginTop: '-50px',
                    }}
                />
            )}
            {/**결과값이 실패한 경우 에러메시지 표시, 성공인 경우 목록 컴포넌트 호출 */}
            {rt !== 200 ? (
                <div className={style.errmsg}>
                    <h3>{rt} Error</h3>
                    <p>{rtmsg}</p>
                </div>
            ) : (
                <ListView documents={item.documents} thumb={true} />
            )}
        </div>
    );
};

export default BookPage;