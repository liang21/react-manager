import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

function NotAuth() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button type="primary" onClick={handleClick}>
          返回首页
        </Button>
      }
    />
  );
}

export default NotAuth;
