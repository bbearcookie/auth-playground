import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <h1>Main Page!</h1>
      <img src="/grizz.jpg" alt="그리즐리" />
      <div>
        <Link to="/s3">S3 이미지 다운로드 기능 사용하러 가기</Link>
      </div>
      <div>
        <Link to="/signup">회원가입 하러 가기</Link>
      </div>
      <div>
        <Link to="/signin">로그인 하러 가기</Link>
      </div>
      <div>
        <Link to="/onlyuser">회원만 볼 수 있는 페이지 보러 가기</Link>
      </div>
      <div>
        <Link to="/onlyguest">비회원만 볼 수 있는 페이지 보러 가기</Link>
      </div>
    </div>
  );
};

export default Main;
