import React from 'react'
import styles from './AppSelector.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWeightHanging, faCalendar, faChartLine } from '@fortawesome/free-solid-svg-icons'
import Button from '../components/Button'

function AppSelector() {
    console.log(styles)
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.header}>Training progress tracker</h1>
                <div className={styles.content}>
                    <AppButton appName="weight" />
                    <AppButton appName="progression" />
                    <AppButton appName="schedule" />
                </div>
            </div>
        </div>)
}

function AppButton({ appName }) {
    let content, icon

    switch (appName) {
        case 'weight':
            content = 'Weight'
            icon = faWeightHanging
            break
        case 'progression':
            content = 'Lifting progression'
            icon = faChartLine
            break
        case 'schedule':
            content = 'Weekly schedule'
            icon = faCalendar
            break
    }

    const iconComponent = <FontAwesomeIcon icon={icon} size="2x" />
    return (
        <Button className={styles.app_button} icon={iconComponent}>
            {content}
        </Button>
    )
}

export default AppSelector