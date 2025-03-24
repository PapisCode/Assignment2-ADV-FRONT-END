import Link from 'next/link';

export default function Contact() {
    return (
        <div>
            <h1>Contact Page</h1>
            <form>
                <label>
                    Name: <input type="text" name="name" />
                </label><br />
                <label>
                    Email: <input type="email" name="email" />
                    </label><br />
                    <button type="submit">Submit</button>
            </form>
            <Link href="/">Back to Home</Link>
        </div>
    );
}