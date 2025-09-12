import styles from './RegisterPage.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthSchema } from '../../authorization';
import type { AuthSchemaType } from '../../authorization';
import api from '../../api';

export default function RegisterPage() {

    const { register,  getValues, reset, formState: { isValid } } = useForm<AuthSchemaType>({
        resolver: zodResolver(AuthSchema),
        mode: 'onChange'
    });

    const onSubmit = async () => {
        const values = getValues();
        reset();

        if (values.password === values.passConfirmation) {
            try {
                const response = await api.post('/register', values);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        } else {
            alert('different passwords');
        }  
};

    return (
        <div className={styles.formWrapper}>
            <form>
                <div className={styles.inputWrapper}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' {...register('username', { required: true })} />
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='password' {...register('password', { required: true })} />
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor='passConfirmation'>Confirm Password</label>
                    <input id='passConfirmation' type='password' {...register('passConfirmation', { required: true })}/>
                </div>
            </form>
            <button className={styles.confirmBtn} onClick={onSubmit} type="submit">SEND</button>
        </div>
    )
}