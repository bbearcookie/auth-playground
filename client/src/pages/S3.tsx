import axios from 'axios';
import { Link } from 'react-router-dom';

const S3_IMAGE_URL =
  'https://bearcookiestudy-image.s3.ap-northeast-2.amazonaws.com/big-bear.jpg';

const CLOUDFRONT_IMAGE_URL =
  'https://d3odjmr288vgvd.cloudfront.net/big-bear.jpg';

const S3 = () => {
  const handleDownload = async (targetUrl: string) => {
    console.log('TODO: 이미지 다운로드 로직 구현하기..');

    const response = await axios.get(targetUrl, {
      responseType: 'blob',
    });

    console.log(response);

    const url = window.URL.createObjectURL(new Blob([response.data]));

    const link = document.createElement('a');
    link.href = url;
    link.download = 'image.jpg';
    document.body.appendChild(link);
    link.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1>S3 버킷에 업로드 된 이미지를 다운로드합니다.</h1>
      <img src={CLOUDFRONT_IMAGE_URL} alt="큰 곰 이미지" />
      <div>
        <Link to="/">메인으로 가기</Link>
        <a href={CLOUDFRONT_IMAGE_URL} download>
          a태그로 다운로드 고고
        </a>
        <div>
          <button onClick={() => handleDownload(S3_IMAGE_URL)}>
            S3 이미지 다운로드 해보기
          </button>
        </div>
        <div>
          <button onClick={() => handleDownload(CLOUDFRONT_IMAGE_URL)}>
            Cloudfront 이미지 다운로드 해보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default S3;
