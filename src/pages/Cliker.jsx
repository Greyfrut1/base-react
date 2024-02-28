import React, {useEffect, useState} from "react";
import styled, {keyframes} from "styled-components";


const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

const pulseAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`;

const AnimatedButton = styled(Button)`
    animation: ${pulseAnimation} 1s infinite;
`;

function Cliker(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchClickCount = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/clicks');
                const data = await response.json();
                setCount(data.count);
            } catch (error) {
                console.error('Помилка при отриманні кількості кліків:', error);
            }
        };

        fetchClickCount();
    }, []);

    const saveClickCount = async () => {
        try {
            await fetch('http://localhost:3000/api/clicks', { method: 'POST' });
            setCount(prevCount => prevCount + 1);
        } catch (error) {
            console.error('Помилка при відправленні кліка:', error);
        }
    };

    return (
        <div>
            <h2>Простий клікер</h2>
            <Button className="click-button" onClick={saveClickCount}>Клікні мене!</Button>
            <p>Кількість кліків: {count}</p>
        </div>
    );
}
export default Cliker