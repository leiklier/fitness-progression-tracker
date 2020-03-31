import React from 'react'

import styles from './Button.css'

function Button({ icon, children: content, className, ...params }) {
    return (
        <div className={styles.container + ' ' + className} {...params}>
            {icon ? <div className={styles.icon}>{icon}</div> : ''}
            <div className={styles.content}>{content}</div>
        </div>
    )
}

export default Button