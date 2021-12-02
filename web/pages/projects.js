import React from 'react';
import groq from 'groq';
import client from '../client';
import Layout from '@/Layouts/Layout';
import ProjectList from '@/components/ProjectList';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const ProjectPage = (props) => {
    const { projects = [] } = props;

    return (
        <Box sx={{ backgroundColor: 'background.default' }} p={2}>
            <Typography variant="h1" gutterBottom>
                Projects
            </Typography>
            <ProjectList projects={projects} />
        </Box>
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
