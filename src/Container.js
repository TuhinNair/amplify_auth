import React from 'react'

const Container = ({children}) => (
    <div style={styles.container}>
        {children}
    </div>
)

const styles = {
    conatiner: {
        margin: '0 auto',
        padding: '50px 100px'
    }
}

export default Container