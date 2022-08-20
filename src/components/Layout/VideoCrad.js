import {Box, Typography, Avatar, makeStyles} from '@material-ui/core'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const useStyles = makeStyles(()=>({
    caption:{
        fontWeight: 500,
        display: '-webkit-box',
        '-webkit-line-clamp':2,
        'webkit-box-orient': 'vertical',
        overflow: 'hidden',
        
    }
}))

export default function VideoCard({item}) {
    const classes = useStyles();
    
    return(
        <Box>
            <img 
            alt={item.title} 
            src={item.thumb} />
            <Box display={'flex'} mt='1'>
                
                <Box>
                    <Avatar alt={item.authNamw} src={item.authorAvatar}>ss</Avatar>
                </Box>

                <Box>
                    <Typography
                    className={classes.caption}
                    gutterBottom
                    variant='body1'
                    color='textPrimary'
                    >
                            {item.title}
                    </Typography>
                    <Typography
                    display='block'
                    variant='body2'
                    color='textSecondary'
                    >
                        {`${dayjs(item.updatedAt).fromNow()}`}
                    </Typography>

                </Box>

            </Box>
        </Box>
    )
}