import Link from 'next/link'
import Image from 'next/image'

const Cat = ({ post }) => {
    return (
        <div
            className="my-1 sm:my-3 rounded-md shadow-md max-w-[200px] shadow-gray-200 dark:shadow-gray-900 bg-gray-800 duration-300 hover:-translate-y-1"
        >
            <Link href={{
                pathname: '/cats/' + post.name.toLowerCase(),
                query: { name: post.name, image: post.image, cute: post.cutenessLevel }
            }}>
                <figure>
                    <Image alt={post.name} src={'/images/' + post.image} width="200px" height="200px"
                        className="rounded-t rounded-t-lg mx-auto" />

                    <figcaption className="p-2">
                        <p
                            className="text-xl text-center mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
                        >{post.name}
                        </p>
                    </figcaption>

                    <div className="w-full rounded h-2.5 ">
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded" style={{ width: post.cutenessLevel + '%' }} ></div>
                    </div>
                </figure>
            </Link>
        </div>
    )
}

export default Cat;