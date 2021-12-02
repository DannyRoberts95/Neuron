// [slug].js
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import client from '../../client';
import Layout from '@/Layouts/Layout';

function urlFor(source) {
    return imageUrlBuilder(client).image(source);
}

const Project = (props) => {
    console.log(props);
    const {
        title = 'Missing title',
        name = 'Missing name',
        categories,
        authorImage,
        mainImage,
        body = []
    } = props;
    return (
        <article>
            <h1>{title}</h1>
            <span>By {name}</span>
            {categories && (
                <ul>
                    Posted in
                    {categories.map((category) => (
                        <li key={category}>{category}</li>
                    ))}
                </ul>
            )}

            {mainImage && (
                <div>
                    <figure style={{ margin: 0 }}>
                        <img
                            alt={title}
                            width="100%"
                            src={urlFor(mainImage[0])
                                .height(Math.floor((9 / 16) * 2000))
                                .fit('crop')
                                .auto('format')
                                .url()}
                        />
                    </figure>
                </div>
            )}
            {authorImage && (
                <div>
                    <img alt={'authorImage'} src={urlFor(authorImage).width(50).url()} />
                </div>
            )}
            <BlockContent
                blocks={body}
                imageOptions={{ w: 320, h: 240, fit: 'max' }}
                {...client.config()}
            />
        </article>
    );
};

const query = groq`*[_type == "project" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  "mainImage": mainImage=>image,
  publishedAt,
  _updatedAt,

  body
}`;

Project.getInitialProps = async function (context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = '' } = context.query;
    return await client.fetch(query, { slug });
};

Project.Layout = Layout;
export default Project;
