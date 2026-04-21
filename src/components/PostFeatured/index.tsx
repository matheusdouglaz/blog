import { PostCoverImage } from "../PostCoverImage"
import { PostHeading } from "../PostHeading"

export function PostFeatured() {

    const slug = 'qualquer'
    const postLink = `/post/${slug}`


    return (
        <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
            <PostCoverImage
                linkProps={{ href: postLink }}
                ImageProps={{
                    src: '/images/bryen_0.png',
                    alt: 'Home',
                    width: 1200,
                    height: 720,
                    priority: true
                }} />
            <div className='flex flex-col gap-4 sm:justify-center'>
                <time dateTime='2026-04-21' className='text-sm/tight text-slate-600'>21 de abril de 2026</time>
                <PostHeading as='h1' url={postLink}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</PostHeading>
            </div>
        </section>
    )
}