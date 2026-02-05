import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';

export default tseslint.config(
    {
        ignores: ['node_modules/**', 'dist/**'],
    },

    {
        files: ['backend/**/*.ts'],
        languageOptions: {
            globals: {
                ...globals.node,
            },
            parserOptions: {
                project: './backend/tsconfig.json',
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            ...js.configs.recommended.rules,
            ...tseslint.configs.recommendedTypeChecked.rules,
        },
    },

    {
        files: ['frontend/**/*.{ts,tsx}'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: './frontend/tsconfig.app.json',
                tsconfigRootDir: import.meta.dirname,
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
            },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            'no-unused-vars': 'off',
            'no-undef': 'off',
            '@typescript-eslint/no-unused-vars': ['warn'],
            ...reactHooks.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            'react-refresh/only-export-components': 'warn',
        },
    },

    {
        files: ['frontend/vite.config.ts'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: null,
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
        },
        rules: {},
    },
);
