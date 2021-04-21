import { Button } from '@material-ui/core'
import React from 'react'
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import { motion } from "framer-motion"
import { Grid } from '@material-ui/core'
let temp

const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: temp.state.data.color,
        width: '100%',
        height: '100vh'
    },
    homeButton: {
        color: 'white',
        fontFamily: 'poppins',
    }

}))

export default function ReviewWebsite({ data }) {
    temp = useLocation()
    // console.log(temp.state.data.color)
    const classes = useStyles(data)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={classes.main}>
            <Grid container>

                {/* Home button */}
                <Grid item>
                    <Link to={{ pathname: '/' }}>
                        <Button className={classes.homeButton}>Home</Button>
                    </Link>
                </Grid>

                {/* Title and description */}
                <Grid item>
                    <Grid container>

                    </Grid>
                </Grid>

                {/* First Photo of album row */}
                <Grid item>

                </Grid>

                {/* API Explanation */}
                <Grid item>

                </Grid>

                {/* Dependencies used */}
                <Grid item>

                </Grid>

                {/* API path photo */}
                <Grid item>

                </Grid>

                {/* Biggest Struggle */}
                <Grid item>

                </Grid>

                {/* Search feature photo */}
                <Grid item>

                </Grid>

                {/* Features */}
                <Grid item>

                </Grid>

                {/* Footer */}
                <Grid item>

                </Grid>

            </Grid>
        </motion.div>
    )
}
