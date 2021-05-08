import React, { useEffect } from 'react';
import RightSide from './RightSide'
import LeftSide from './LeftSide'
import { Grid } from '@material-ui/core'
import { motion } from "framer-motion"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
}))


export default function Home({ data }) {

    //Scroll to top on startup
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const classes = useStyles(data)

    return (
        <Grid container direction="row">
            <Grid item xs={12} sm={12} md={5}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }} >

                    <LeftSide props={"Resume"} />

                </motion.div>
            </Grid>

            <Grid item xs={12} sm={12} md={7}>
                <motion.div
                    initial={{ x: 2000 }}
                    animate={{ x: 0 }}
                    exit={{ x: 2000 }}
                    transition={{ duration: 0.5 }}>
                    <RightSide />
                </motion.div>
            </Grid>
        </Grid >
    )
}
