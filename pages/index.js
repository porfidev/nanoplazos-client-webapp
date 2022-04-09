import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>This is a demo intro please select a flow</h1>
      <Link href="/new-user">
        <a>New User Flow</a>
      </Link>
    </div>
  );
}
