import { useRouter } from 'next/router'
import Cat from '../../components/cat'
import Head from 'next/head'

function CatPost() {
    const router = useRouter()
    const name = router.query.name;
    const image = router.query.image;
    const cutenessLevel = router.query.cute;

    if (name) {
        var post = {
            name,
            image,
            cutenessLevel
        }
    }

    return (
        <>
            <Head>
                <title>{post.name}</title>
                <meta name="description" content="Simple Cats App" />
            </Head>
            <div className="grid place-items-center h-screen">
                {post && <Cat post={post} />}
            </div>
        </>
    )
}

export default CatPost;
