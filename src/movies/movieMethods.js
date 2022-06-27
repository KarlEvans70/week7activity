const mongoose = require("mongoose");
const Movie = require("./movieModels");
const yargs = require("yargs");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj)
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async () => {
    try {
        return await Movie.find({});
    } catch {error} {
        console.log(error);
    }
};

exports.updateMovie = async (filterTitle, newData) => {
    try {
        return Movie.findAndAmend (filterTitle, newData);
    } catch (error){
        console.log(error);
    }
};

exports.deleteMovie = async (movieObj) => {
    try{
        return Movie.deleteMovie(movieObj)
    } catch (error) {
        console.log(error);
    }
};

// create update one or update many functions

// create a delete one or delete many function