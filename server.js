require("ts-node").register({
    compilerOptions: {
        module: "commonjs"
    }
});
require("./src/server.tsx");
