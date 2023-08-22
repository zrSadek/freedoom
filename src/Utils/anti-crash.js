module.exports = () => {
    process.on("uncaughtException", (errror, origin) => {});
}