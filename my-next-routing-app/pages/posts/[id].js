import { useRouter } from 'next/router';

const posts = [
    { id: '1', title: 'Music Post', content: 'Who can compete with Drake these days?' },
    { id: '2', title: 'Tech Post', content: 'Elon will change what the future holds when it comes to AI development.' },
    { id: '3', title: 'Food Post', content: 'Italien food is one the best foods ever created.' }
];

export default function Post() {
    const router = useRouter();
    const { id } = router.query;
    
    const currentPost = posts.find(p => p.id === id);

    if (!currentPost) return <p>Post not found</p>;

    return (
        <div>
            <h1>{currentPost.title}</h1>
            <p>{currentPost.content}</p>
            <a href="/">Back to Home</a>
        </div>
    );
}

