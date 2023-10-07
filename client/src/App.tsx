import SigninForm from './components/SigninForm';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <>
      <h1>회원가입</h1>
      <SignupForm />

      <h1>로그인</h1>
      <SigninForm />
    </>
  );
}

export default App;
