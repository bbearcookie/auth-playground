import { Link } from 'react-router-dom';

const OnlyGuest = () => {
  return (
    <div>
      <h1>여긴 비회원만 볼 수 있는 페이지입니다.</h1>
      <div>
        <Link to="/">메인으로 가기</Link>
      </div>
    </div>
  );
};

export default OnlyGuest;
