module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    parser: "babel-eslint",
    extends: ["airbnb", "prettier", "prettier/react"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            modules: true,
            
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ["react", "prettier"]
    
};