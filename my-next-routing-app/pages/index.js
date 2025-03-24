import Link from 'next/link';

const posts = [
  { id: '1', title: 'Music Post'},
  { id: '2', title: 'Tech Post'},
  { id: '3', title: 'Food Post'},
];

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <nav>
        <Link href="/about">About</Link> |{''}
        <Link href="/contact">Contact</Link>
      </nav>

      <h2>Blog Post</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}