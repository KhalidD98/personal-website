import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Projects from './Projects'
import projectData from './content/projects.json'

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        overflow: 'hidden'
    },
    minecraftServerCurve: {
        top: '0',
        left: '0',
        width: '100%',
        overflow: 'hidden',
        lineHeight: '0',
    },
    minecraftServerCurveSVG: {
        position: 'relative',
        display: 'block',
        width: 'calc(123% + 1.3px)',
        height: '40px',
        backgroundColor: '#393E46',
        fill: '#CD494F'
    },
    personalWebsiteCurve: {
        top: '0',
        left: '0',
        width: '100%',
        overflow: 'hidden',
        lineHeight: '0',
    },
    personalWebsiteCurveSVG: {
        position: 'relative',
        display: 'block',
        width: 'calc(200% + 1.3px)',
        height: '55px',
        backgroundColor: '#008698',
        fill: '#358D5A'
    },
    amrCurve: {
        top: '0',
        left: '0',
        width: '100%',
        overflow: 'hidden',
        lineHeight: '0',
    },
    amrCurveSVG: {
        position: 'relative',
        display: 'block',
        width: 'calc(200% + 1.3px)',
        height: '55px',
        backgroundColor: '#358D5A',
        fill: '#393E46'
    }
}))

export default function RightSide() {

    // Scroll to top on start up
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const classes = useStyles()

    return (
        <div className={classes.container}>
            {/* Review Website */}
            <>
                <Projects data={projectData[0]} />
            </>

            {/* Single Streamer Minecraft Server */}
            <>
                {/* Curve */}
                <div className={classes.minecraftServerCurve}>
                    <svg className={classes.minecraftServerCurveSVG} viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>
                </div>

                <Projects data={projectData[1]} />
            </>

            {/* Access My Research */}
            <>
                {/* Curve */}
                <div className={classes.amrCurve}>
                    <svg className={classes.amrCurveSVG} viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>
                </div>

                <Projects data={projectData[3]} />
            </>

            {/* Personal Website */}
            <>
                {/* Curve */}
                <div className={classes.personalWebsiteCurve}>
                    <svg className={classes.personalWebsiteCurveSVG} viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>
                </div>

                <Projects data={projectData[2]} />
            </>
        </div>
    )
}
