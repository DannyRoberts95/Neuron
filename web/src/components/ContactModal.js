import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { CloseFullscreenSharp, Phone } from '@mui/icons-material';
import { IconButton, Stack, TextField, Typography } from '@mui/material';

import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const validationSchema = yup.object({
    name: yup.string('Enter your name').required('Name silly...'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('How are we suppose to write back?'),
    message: yup.string('Write something?').required('Write something...')
});
export default function MaxWidthDialog() {
    const [open, setOpen] = useState(false);
    const [fullWidth, setFullWidth] = useState(true);

    const [isSending, setIsSending] = useState(false);
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (values) => {
        setFeedback('Sending...');
        setIsSending(true);

        axios
            .get(`/api/send-mail`, {
                params: { ...values }
            })
            .then((res) => {
                console.log(res);
                if (res.status == 200) {
                    setFeedback(`Message sent. We'll be in touch`);
                    setTimeout(() => {
                        setOpen(false);
                        formik.resetForm();
                    }, 2500);
                } else {
                    setFeedback(res.error);
                }
                setIsSending(false);
            })
            .catch((err) => {
                setIsSending(false);
                console.log(err);
            });
    };

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
            subject: '',
            message: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => handleSubmit(values)
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
                        <Stack direction="column" spacing={4} mb={2}>
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
                                id="subject"
                                name="subject"
                                label="Subject"
                                variant="standard"
                                value={formik.values.subject}
                                onChange={formik.handleChange}
                                error={formik.touched.subject && Boolean(formik.errors.subject)}
                                helperText={formik.touched.subject && formik.errors.subject}
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
                        <Typography variant="body2">{feedback}</Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                        <Button color="primary" variant="contained" type="submit" disabled={isSending}>
                            Send
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </React.Fragment>
    );
}
