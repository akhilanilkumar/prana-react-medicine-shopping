import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export default function Contact() {
    const contact = {
        first: "Deepa",
        last: "Raj",
        avatar: "https://placekitten.com/g/200/200",
        twitter: "your_handle",
        notes: "Some notes",
        favorite: true,
    };
    return (
        <Card sx={{maxWidth: 345}}>
            <CardMedia
                component="img"
                height="140"
                image={contact.avatar}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {`${contact.first} ${contact.last}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {contact.notes}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="outlined" startIcon={<EditIcon/>}>Edit</Button>
                <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon/>}>Delete</Button>
            </CardActions>
        </Card>
    );
}
