import React from 'react'
import Button from './Button'
import {styles} from './Form'

function ForgotPassword({updateFormState, forgotPassword}) {
    return (
        <div style={styles.container}>
            <input
                name='username'
                placeholder='Username'
                onChange={e => {e.persist(); updateFormState(e);}}
                style={styles.input}
            />
            <Button onClick={forgotPassword} title='Reset Password'/>
        </div>
    )
}

export default ForgotPassword