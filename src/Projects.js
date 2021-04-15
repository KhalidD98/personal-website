import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { DiReact, DiJsBadge, DiCss3 } from "react-icons/di"
import { SiMaterialUi } from "react-icons/si";
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: props => props.color,
        display: 'flex',
        // width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white'
    },
    title: {
        padding: '0',
        margin: '0',
        marginTop: '10%',
        marginBottom: '7%',
        fontFamily: 'poppins'
    },
    description: {
        width: '65%',
        fontFamily: 'poppins',
        textAlign: 'center',
        marginBottom: '10%'
    },
    icons: {
        width: '60px',
        height: '60px',
    },
    iconContainer: {
        marginBottom: '20%'
    }
}))

export default function Projects({ data }) {
    const classes = useStyles(data)
    return (
        <div className={classes.main}>
            <h1 className={classes.title}>{data.name}</h1>
            <h2 className={classes.description}>{data.description}</h2>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.iconContainer}
                spacing={5}>

                {data.icons.map((icon, index) => {
                    switch (icon) {
                        case 'react':
                            return (
                                <Grid item>
                                    <DiReact key={index} className={classes.icons} />
                                </Grid>
                            )
                        case 'css':
                            return (
                                <Grid item>
                                    <DiCss3 key={index} className={classes.icons} />
                                </Grid>
                            )
                        case 'js':
                            return (
                                <Grid item>
                                    <DiJsBadge key={index} className={classes.icons} />
                                </Grid>
                            )
                        case 'materialui':
                            return (
                                <Grid item>
                                    <SiMaterialUi key={index} className={classes.icons} />
                                </Grid>
                            )
                    }
                })}

                {/*<Grid item>
                    <DiReact className={classes.icons} />
                </Grid>
                 <Grid item>
                    <DiJsBadge className={classes.icons} />
                </Grid>
                <Grid item>
                    <DiCss3 className={classes.icons} />
                </Grid>
                <Grid item>
                    <SiMaterialUi className={classes.icons} />
                </Grid> */}
            </Grid>
        </div>
    )
}
