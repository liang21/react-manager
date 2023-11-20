import { Spin } from "antd";
import "./loading.scss";
export default function Loading({ tip = "loading" }: { tip?: string }) {
  return <Spin tip={tip} size="large" className="request-loading" />;
}
