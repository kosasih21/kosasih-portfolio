import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider } from '@mantine/core';
import './styles/globals.css';
import '@mantine/core/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                defaultColorScheme: 'dark', // Ensures the theme matches your dark UI
            }}
        >
            <App />
        </MantineProvider>
    </React.StrictMode>
);
