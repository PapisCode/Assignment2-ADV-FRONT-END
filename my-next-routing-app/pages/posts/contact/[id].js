import { useRouter } from 'next/router';

const post = [
    { id: '1', title: 'Music Post', content: 'Who can compete with Drake these days?' },
    { id: '2', title: 'Tech Post', content: 'Elon will change what the future holds when it comes to AI development.' },
    { id: '3', title: 'Food Post', content: 'Italien food is one the best things ever created.' }
];

export default function Post() {
    const router = useRouter();
    const { id } = router.query;
    const post = post.find(p => p.id === id);

    if (!post) return <p>Post not found</p>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <a href="/">Back to Home</a>
        </div>
    );
}