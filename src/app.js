require("./db/connection")
const mongoose = require("mongoose");
const yargs = require("yargs");
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movies/movieMethods");

const app = async (yargsObj) => {
    try {
        if (yargsObj.add) {
            await addMovie({ title: yargsObj.title, actor: yargsObj.actor})
            console.log(await listMovies());
        } else if (yargsObj.list) {
            console.log(await listMovies());
        } else if (yargsObj.update) {
            await updateMovie ({actor:yargsObj.update}, {title, actor: yargsObj.actor });
            console.log(await listMovies());
        } else if (yargsObj.delete) {
            await deleteMovie({ title: yargsObj.title })
            console.log(await listMovies());
        } else {
            console.log("Incorrect command");
        }
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
    }
};

app(yargs.argv);