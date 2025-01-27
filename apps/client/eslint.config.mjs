import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.config({
        extends: [
            'next/core-web-vitals',
            'next/typescript',
            'plugin:import/recommended',
        ],
        rules: {
            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    prefer: 'type-imports',
                    fixStyle: 'separate-type-imports',
                },
            ],
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
            'import/order': [
                'error',
                {
                    alphabetize: { order: 'asc', caseInsensitive: true },
                    'newlines-between': 'always',
                    pathGroups: [
                        '@widgets/**',
                        '@features/**',
                        '@entities/**',
                        '@shared/**',
                    ].map((pattern) => ({
                        pattern,
                        group: 'internal',
                        position: 'after',
                    })),
                    pathGroupsExcludedImportTypes: ['builtin'],
                    groups: [
                        'builtin', // Node.js built-in modules
                        'external', // External libraries
                        'internal', // Internal project modules
                        'parent', // Parent directory modules
                        'sibling', // Same directory modules
                        'index', // Index files
                    ],
                },
            ],
            'import/no-restricted-paths': [
                'error',
                {
                    zones: [
                        // Widgets layer restrictions
                        {
                            target: 'src/widgets',
                            from: 'src/app',
                        },
                        // Features layer restrictions
                        {
                            target: 'src/features',
                            from: 'src/app',
                        },
                        {
                            target: 'src/features',
                            from: 'src/widgets',
                        },
                        // Entities layer restrictions
                        {
                            target: 'src/entities',
                            from: 'src/app',
                        },
                        {
                            target: 'src/entities',
                            from: 'src/widgets',
                        },
                        {
                            target: 'src/entities',
                            from: 'src/features',
                        },
                        // Shared layer restrictions
                        {
                            target: 'src/shared',
                            from: 'src/app',
                        },
                        {
                            target: 'src/shared',
                            from: 'src/widgets',
                        },
                        {
                            target: 'src/shared',
                            from: 'src/features',
                        },
                        {
                            target: 'src/shared',
                            from: 'src/entities',
                        },
                    ],
                },
            ],
        },
    }),
];

export default eslintConfig;
