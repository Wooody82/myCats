import Head from 'next/head'
import Cat from '../components/cat'
import React, { useState, useEffect } from 'react';

export default function Home({ posts }) {
  const [data, setData] = useState(posts);
  const [sortType, setSortType] = useState('none');

  useEffect(() => {
    const sortArray = type => {
      var sorted
      if (type === 'asc') {
        sorted = [...posts].sort((a, b) => b.cutenessLevel - a.cutenessLevel);
      } else if (type === 'desc') {
        sorted = [...posts].sort((a, b) => a.cutenessLevel - b.cutenessLevel);
      } else {
        sorted = [...posts]
      }
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType,posts]);

  var btnStyle = ' mx-3 hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'

  return (
    <div className="max-w-6xl mx-auto container mx-auto px-4">
      <Head>
        <title>My Cats App</title>
        <meta name="description" content="Simple Cats App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {posts && posts.length > 0 &&
        <section className="py-10">
          <div className="mb-5">
            <span className="font-bold text-xl mb-2 sm:inline-block block">Sorting: </span>
            <button onClick={() => setSortType('none')} className={sortType === 'none' ? ' bg-blue-500 text-white ' + btnStyle : 'bg-transparent text-blue-700' + btnStyle}>
              None
            </button>
            <button onClick={() => setSortType('asc')} className={sortType === 'asc' ? ' bg-blue-500 text-white ' + btnStyle : 'bg-transparent text-blue-700' + btnStyle}>
              Much Cute
            </button>
            <button onClick={() => setSortType('desc')} className={sortType === 'desc' ? ' bg-blue-500 text-white ' + btnStyle : 'bg-transparent text-blue-700' + btnStyle}>
              Not Cute
            </button>
          </div>
          <div
            className="grid grid-flow-row gap-8 text-neutral-600 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {data.map((post, i) => (
              <Cat key={i} post={post} />
            ))}
          </div>
        </section>
      }
    </div>
  )
}


export async function getStaticProps() {
  const res = await fetch(process.env.API_URL + '/mycats')
  const posts = await res.json()

  return {
    props: {
      posts: posts.cats,
    },
    revalidate: 10, // In seconds
  }
}