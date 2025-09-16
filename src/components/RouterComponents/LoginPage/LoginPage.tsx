import styles from './LoginPage.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '../../authorization';
import type { LoginSchemaType } from '../../authorization';
import api from '../../api';


export default function LoginPage() {


     const { register,  getValues, reset } = useForm<LoginSchemaType>({
            resolver: zodResolver(LoginSchema),
            mode: 'onChange'
        });
    
        const onSubmit = async () => {
            const values = getValues();
            reset();
            
            try {
                const response = await api.post('/auth/login', values);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }

    };

    return (
        <div className={styles.formWrapper}>
            <form>
                <div className={styles.inputWrapper}>
                    <label htmlFor='username'>Username</label>
                    <input  id='username' {...register('username', { required: true })} />
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor='password'>Password</label>
                    <input  id='password' type='password' {...register('password', { required: true })} />
                </div>
            </form>
            <button className={styles.confirmBtn} onClick={onSubmit} type="submit">SEND</button>
        </div>
    )
}