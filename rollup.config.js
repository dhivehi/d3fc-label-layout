import babel from 'rollup-plugin-babel';

export default {
    entry: 'index.js',
    moduleName: 'fc',
    format: 'umd',
    plugins: [
        babel({
            babelrc: false,
            presets: ['es2015-rollup']
        })
    ],
    dest: 'build/d3fc-label-layout.js',
    globals: {
        'd3-array': 'd3',
        'd3-selection': 'd3',
        'd3fc-data-join': 'fc',
        'd3fc-rebind': 'fc'
    }
};
