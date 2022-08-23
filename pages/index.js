import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
const HomePage = () => {
    const router = useRouter()
    useEffect(() => {
        router.push("/signup")
    },[])
    return (
        <div>
            this is Home <br></br>
            <Link href="/blogs">
            <a>go to blogs ?</a>
            </Link>
        </div>
    );
};

export default HomePage;