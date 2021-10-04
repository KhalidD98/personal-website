import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    conversationImage: {
        width: '344px',
        height: '415px',
        borderRadius: '8px',
        overflow: 'hidden',
    },
    flipCards: {
        margin: '0.3rem',
    },
    topLine: {
        width: '5rem',
        border: '1px solid  #227a46',
        marginBottom: '2rem',
    },
    bottomLine: {
        width: '5rem',
        border: '1px solid  #227a46',
        marginTop: '2rem',
    },
}))

export default function AMRCard({ src, info }) {
    const classes = useStyles()
    return (
        <Flippy
            className={classes.flipCards}
            flipOnHover={true}
            flipOnClick={true}
            flipDirection="horizontal"
        >
            <FrontSide
                animationDuration={500}
                style={{
                    backgroundColor: '#3ea167',
                    borderRadius: '8px',
                }}
            >
                <Grid item className={classes.conversationImage}>
                    <img src={src}></img>
                </Grid>
            </FrontSide>
            <BackSide
                animationDuration={500}
                style={{
                    backgroundColor: '#3ea167',
                    borderRadius: '8px',
                    fontSize: '20px',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                <hr className={classes.topLine}></hr>
                <div>
                    {info}
                </div>
                <hr className={classes.bottomLine}></hr>
            </BackSide>
        </Flippy >
    )
}
