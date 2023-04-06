import "../styles/globals.css"
import { Card, Space } from 'antd'
import Link from "@/components/Link"
import { Provider } from "react-redux"
import { store } from "../store"

export default function App({ Component, pageProps }) {
  return <Provider store={store}>
    <Card hoverable={true}>
      <Space size={"large"}>
        <Link href="/">Explore</Link>
        <Link href="/test">Test</Link>
        <Link href="/chat">Chat</Link>
        <Link href="/profile">Profile</Link>
      </Space>
    </Card>
    <Component {...pageProps} />
  </Provider>
}
