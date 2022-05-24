import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1>This is a demo intro please select a flow</h1>
      <Link href="/new-user">
        <a>New User Flow</a>
      </Link>
    </Layout>
  );
}
