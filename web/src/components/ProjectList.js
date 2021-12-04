import React from 'react';
import { Grid } from '@mui/material';
import ProjectCard from '@/components/ProjectCard';

const ProjectList = (props) => {
    const { projects = [] } = props;

    const projectCards = projects.map((project, i) => (
        <Grid key={project.name + i}  flexBasis="100%" xs={12} sm={6} md={4}>
            <ProjectCard project={project} />
        </Grid>
    ));

    return (
        <Grid container direction="row" spacing={2}>
            {projectCards}
        </Grid>
    );
};

export default ProjectList;
