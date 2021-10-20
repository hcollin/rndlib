import typescript from "@rollup/plugin-typescript";


export default {
    input: "src/index.ts",
    output: [
        // { file: pkg.main, format: "cjs", dir: "dist/"},
        // { file: pkg.module, format: "es" },
        // { file: pkg.browser, name: "jokits", format: "umd"},
        // { format: "cjs", dir: "dist/cjs/"},
        // { format: "es", dir: "dist/es/" },
        { name: "rndlib", format: "umd", dir: "dist/" },
    ],
    plugins: [
        typescript({
            declaration: true,
            declarationDir: "dist/",
            rootDir: "src/",
        }),
    ],
};
