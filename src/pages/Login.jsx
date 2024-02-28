import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault(); // Зупиняємо стандартну дію відправки форми

        // Отримуємо дані форми з formData
        console.log(formData);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        // Оновлюємо formData згідно зі змінами в полі форми
        setFormData({ ...formData, [name]: value });
    }

    return (
        <Form className={'h-50 gap-4 d-flex flex-column align-content-between'} onSubmit={handleSubmit}>
            <Form.Control required placeholder={'example@mail.com'} name={'email'} type={'email'} value={formData.email} onChange={handleChange} />
            <Form.Control required placeholder={'password'} name={'password'} type={'password'} value={formData.password} onChange={handleChange} />
            <Button type={'submit'}>Login</Button>
        </Form>
    );
}

export default Login;
