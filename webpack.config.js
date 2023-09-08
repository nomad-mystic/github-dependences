import path from 'path';
import { fileURLToPath } from "url";

// @todo make this a method
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const config = {
    entry: './src/app/index.tsx',
    output: {
        path: path.resolve(dirname, 'build/app'),
        filename: 'index.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
        ],
    },
    plugins: [],
};

export default config;
