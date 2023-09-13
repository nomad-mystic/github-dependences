import path from 'path';
import { fileURLToPath } from 'url';

// @todo make this a method
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

console.log(path.resolve(dirname, 'src/app/tsconfig.json'));

const config = {
    entry: path.resolve(dirname, 'src/app/index.tsx'),
    output: {
        path: path.resolve(dirname, 'build/app'),
        filename: 'index.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(dirname, 'src/app/tsconfig.json'),
                        }
                    }
                ],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};

export default config;
