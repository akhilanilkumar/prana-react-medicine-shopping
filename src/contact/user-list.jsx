import {Divider, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import * as React from 'react';


const UserList = ({users}) => (
    <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
        {
            users && users.length && users.map(user => (
                <>
                    <ListItem alignItems="flex-start" key="{user.id}">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={user.thumbnailUrl}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                // eslint-disable-next-line react/jsx-no-undef
                                <React.Fragment>
                                    <Typography
                                        sx={{display: 'inline'}}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {` — ${user.title}`}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                </>
            ))
        }
    </List>
);

export default UserList;