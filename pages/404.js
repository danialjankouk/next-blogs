import React  from 'react';
import Link from "next/link"
const NotFound = () => {
    return (
        <div>
            this page in not found<br></br>
            <Link href="/">
            <a>back to home ?</a>
            </Link>
        </div>
    );
};

export default NotFound;