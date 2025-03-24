import Link from 'next/link';

export default function About() {
    return (
        <div>
            <h1>About Page</h1>
            <p>This app demonstrates basic routing in Next.js</p>
            <Link href="/">Back to Home</Link>
        </div>
    );
}