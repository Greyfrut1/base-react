import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap'; // Додали компонент Alert для відображення повідомлення про помилку
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState(null); // Створили стан для відображення повідомлення про помилку

    const handleSubmit = (event) => {
        event.preventDefault();

        // Перевіряємо, чи паролі збігаються
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords don't match"); // Встановлюємо повідомлення про помилку
            return;
        }

        // Отримуємо дані форми з formData
        console.log(formData);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setError(null)
    }

    return (
        <Form className={'h-50 gap-4 d-flex flex-column align-content-between'} onSubmit={handleSubmit}>
            <Form.Control required placeholder={'example@mail.com'} name={'email'} type={'email'} value={formData.email} onChange={handleChange} />
            <Form.Control required placeholder={'password'} name={'password'} type={'password'} value={formData.password} onChange={handleChange} />
            <Form.Control required placeholder={'confirm password'} name={'confirmPassword'} type={'password'} value={formData.confirmPassword} onChange={handleChange} />
            <Button type={'submit'}>Register</Button>

            {error && <Alert variant="danger">{error}</Alert>} {/* Відображаємо повідомлення про помилку, якщо воно є */}
        </Form>
    );
}

export default Register;
