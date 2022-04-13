import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Top = ({ setSortValue }) => {
    const inputQuery = useRef();

    //검색어, 상태변수 => 기본값은 빈 문자열
    const [query, setQuery] = useState('');

    //페이지 강제 이동 함수 생성
    const navigate = useNavigate();

    //검색 폼에 대한 이벤트 핸들
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = inputQuery.current.value;

        if (!value) {
            inputQuery.current.focus();
            alert('검색어를 입력하세요.');
            return;
        }
        //입력된 검색어를 상태변수에 등록
        setQuery(value);

        // 검색 페이지로 강제 이동
        if (query) {
            navigate(`/book?query=${encodeURIComponent(query)}`);
        }
    };

    return (
        <>
            <div>
                <h1>카카오 Book 검색</h1>
                <hr />
                <form onSubmit={handleSubmit}>
                    <input type="search" name="query" ref={inputQuery} />
                    <button type="submit">검색</button>
                </form>
            </div>
        </>
    );
};

export default Top;