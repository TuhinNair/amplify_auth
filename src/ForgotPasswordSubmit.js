import React from 'react'
import Button from './Button'
import {styles} from './Form'

function ForgotPasswordSubmit({updateFormState, forgotPasswordSubmit}) {
    return (
        <div style={styles.container}>
            <input
                name='confirmationCode'
                placeholder='Confirmation Code'
                onChange={e => {e.persist(); updateFormState(e);}}
                style={styles.input}
            />
            <input
                name='password'
                placeholder='New Password'
                type='password'
                onChange={e => {e.persist(); updateFormState(e);}}
                style={styles.input}
            />
            <Button onClick={forgotPasswordSubmit} title='Save new password' />
        </div>
    )
}

export default ForgotPasswordSubmit