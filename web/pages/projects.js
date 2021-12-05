import React from 'react';
import groq from 'groq';
import client from '../src/client';
import Layout from '@/Layouts/Layout';
import ProjectList from '@/components/ProjectList';
import { Container, Typography } from '@mui/material';

const ProjectPage = (props) => {
    const { projects = [] } = props;

    return (
        <Container maxWidth={false}>
            <Typography variant="h1" gutterBottom>
                Projects
            </Typography>
            <ProjectList projects={projects} />
        </Container>
    );
};

ProjectPage.getInitialProps = async () => ({
    projects: await client.fetch(groq`
    *[_type == "project" && publishedAt < now()]{ 
      title,
      slug,
      "name": author->name,
      "categories": categories[]->title,
      "authorImage": author->image,
      "mainImage": mainImage=>image,
      publishedAt,
      _updatedAt,
      body}|order(publishedAt desc)
  `)
});

ProjectPage.Layout = Layout;

export default ProjectPage;
