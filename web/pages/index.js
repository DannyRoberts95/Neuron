// index.js
import Link from "next/link";
import groq from "groq";
import client from "../client";

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const Index = (props) => {
  const { posts = [] } = props;
  const { projects = [] } = props;

  const postLinks = posts.map(
    ({ _id, title = "", slug = "", _updatedAt = "" }) =>
      slug && (
        <li key={_id}>
          <Link href="/post/[slug]" as={`/post/${slug.current}`}>
            <a>{title}</a>
          </Link>{" "}
          ({new Date(_updatedAt).toDateString()})
        </li>
      )
  );

  const projectLinks = projects.map(
    ({ _id, title = "", slug = "", _updatedAt = "" }) =>
      slug && (
        <li key={_id}>
          <Link href="/project/[slug]" as={`/project/${slug.current}`}>
            <a>{title}</a>
          </Link>{" "}
          ({new Date(_updatedAt).toDateString()})
        </li>
      )
  );

  return (
    <ReactFullpage
      scrollOverflow={true}
      onLeave={() => console.log("scroll")}
      // afterLoad={() => console.log("scroll")}
      render={({ fullpageApi }) => {
        return (
          <div>
            <div className="section" style={{backgroundColor:"red"}}>{projectLinks}</div>
            <div className="section" style={{backgroundColor:"blue"}}>{postLinks}</div>
            <div className="section" style={{backgroundColor:"purple"}}>section 3</div>
            <div className="section" style={{backgroundColor:"yellow"}}>
              <h3>Section 3</h3>
              <button onClick={() => fullpageApi.moveTo(1, 0)}>Move top</button>
            </div>
          </div>
        );
      }}
    />
  );
};

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`
      *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
    `),
  projects: await client.fetch(groq`
      *[_type == "project" && publishedAt < now()]|order(publishedAt desc)
    `),
});

export default Index;
