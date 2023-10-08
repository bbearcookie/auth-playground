import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <h1>Main Page!</h1>
      <div>
        <Link to="/signup">회원가입 하러 가기</Link>
      </div>
      <div>
        <Link to="/signin">로그인 하러 가기</Link>
      </div>
      <div>
        <Link to="/onlyuser">회원만 볼 수 있는 페이지 보러 가기</Link>
      </div>
    </div>
  );
};

export default Main;
