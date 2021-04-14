import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    main: {
        height: '1900px',
        width: '100%',
        backgroundColor: props => props.color,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        color: 'white'
    },
    title: {
        padding: '0',
        margin: '0',
        marginTop: '17%',
        marginBottom: '8%'
    }
}))

export default function Projects({ data }) {
    const classes = useStyles(data)
    return (
        <div className={classes.main}>
            <h1 className={classes.title}>{data.name}</h1>
            <h2>{data.description}</h2>
        </div>
    )
}
