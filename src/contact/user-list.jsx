import {Divider, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import * as React from 'react';


const UserList = ({users}) => (
    <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
        {
            users && users.length && users.map(user => (
                <span key={user.id}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={user.thumbnailUrl}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={user.name}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{display: 'inline'}}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {user.address}
                                    </Typography>
                                    {` — ${user.phone}`}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                </span>
            ))
        }
    </List>
);

export default UserList;
