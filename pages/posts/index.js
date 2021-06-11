import React from 'react'
import Link from "next/link";
import styles from "./index.module.scss";
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>Loading....</p>,
    ssr: false
})


// import Header from './components/Header'
export default function Posts({ posts }) {


    return (
        <React.Fragment>
            <Header />
            <div className='container mt-5'>
                <div className='row'>
                    {posts.map((post) => {
                        return (
                            <div className='co-lg-4 col-md-4 mb-4 d-flex' key={post.id}>

                                <div className="card shadow" >
                                    {process.env.NEXT_PUBLIC_API_BASE_URL}
                                    <img src={"./images/posts/" + post.id + ".jpg"} className={styles.postImage} />
                                    <div className="card-body">

                                        <Link href={"/posts/" + post.id}>
                                            <h5 className={styles.title}>
                                                {post.title}
                                            </h5>
                                        </Link>
                                        <p className={styles.card_text}>{post.body}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </React.Fragment>
    )
}

export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.POST_URL}`);
    const posts = await res.json();

    return {
        props: {
            posts,
        },
    };
}

// export async function getServerSideProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }