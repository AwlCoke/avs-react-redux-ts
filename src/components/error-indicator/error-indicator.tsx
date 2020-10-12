import React from 'react';
import './error-indicator.scss';
import { Alert } from 'antd';

const ErrorIndicator = () => {
    return (
        <div className="error-container">
            <Alert
                message="Что-то пошло не так!"
                description="Мы уже работаем над этим. Пожалуйста, повторите попытку через несколько минут."
                type="warning"
            />
        </div>
    );
};

export default ErrorIndicator;
