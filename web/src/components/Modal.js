import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Phone } from '@mui/icons-material';
import { IconButton, Stack, TextField } from '@mui/material';

import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    name: yup.string('Enter your name').required('Name silly...'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('How are we suppose to write back?'),
        message: yup.string('Write something?').required('Write something...')
});
export default function MaxWidthDialog() {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <React.Fragment>
            <IconButton color="primary" onClick={handleClickOpen}>
                <Phone />
            </IconButton>
            <Dialog fullWidth={fullWidth} maxWidth={'xs'} open={open} onClose={handleClose}>
                <form onSubmit={formik.handleSubmit}>
                    <DialogTitle>Contact</DialogTitle>
                    <DialogContent>
                        <Stack direction="column" spacing={4}>
                            <TextField
                                fullWidth
                                id="name"
                                name="name"
                                label="Name"
                                variant="standard"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                label="Email"
                                variant="standard"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                            <TextField
                                fullWidth
                                id="message"
                                name="message"
                                label="Message"
                                variant="standard"
                                multiline
                                rows={5}
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                error={formik.touched.message && Boolean(formik.errors.message)}
                                helperText={formik.touched.message && formik.errors.message}
                            />
                        </Stack>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                        <Button color="primary" variant="contained" type="submit">
                            Send
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </React.Fragment>
    );
}
