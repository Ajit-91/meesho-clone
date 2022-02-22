import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { LOGOUT, selectUser } from '../Redux/Slices/userSlice';
import { logout } from '../apis/commonApis';
import LogoutIcon from '@mui/icons-material/Logout';
import "../assets/css/profileSnap.css"

const ProfileSnap = ({setShow}) => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser);

    const handleClickAway = () => {
        setShow(false)
    }

    const handleLogout = async () => {
        const res = await logout()
        if(res?.msg==="success"){
            dispatch(LOGOUT())
        }
    }

    return (
        <div>
            <ClickAwayListener onClickAway={handleClickAway}>
                <div className='navList shadow-lg'>
                    <List >
                        <ListItem disablePadding>
                            <ListItemButton className='User_Info' >
                                <div>
                                    <h5>{user?.name}</h5>
                                    <small>{user?.email}</small>
                                </div>
                            </ListItemButton>
                        </ListItem>

                        <Divider />

                        <ListItem disablePadding>
                            <ListItemButton onClick={handleLogout}>
                                <ListItemIcon>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText primary="Logout" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </div>
            </ClickAwayListener>
        </div>
    )
}

export default ProfileSnap