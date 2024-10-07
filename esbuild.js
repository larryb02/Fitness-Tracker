const esbuild = require("esbuild");

esbuild
    .build({
        entryPoints: ["./index.js", "./styles.css"],
        outdir: "./static",
        bundle: true,
        //watch: true,
        minify: true,
        plugins: [],
        loader: {'.js': 'jsx'}
    })
    .then(() => console.log("⚡ Build complete! ⚡"))
    .catch(() => process.exit(1));