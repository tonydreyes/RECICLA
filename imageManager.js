// imageManager.js

/**
 * Handles image uploads, deletions, and management for the website.
 */

const fs = require('fs');
const path = require('path');

const imagesDirectory = path.join(__dirname, 'uploads');

/**
 * Uploads an image to the server.
 * @param {File} file - The image file to upload.
 * @returns {Promise<string>} - The file path of the uploaded image.
 */
async function uploadImage(file) {
    const filePath = path.join(imagesDirectory, file.name);
    const stream = fs.createWriteStream(filePath);
    stream.write(file.data);
    stream.end();
    return filePath;
}

/**
 * Deletes an image from the server.
 * @param {string} filePath - The file path of the image to delete.
 * @returns {Promise<void>}
 */
async function deleteImage(filePath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
}

/**
 * Retrieves a list of all uploaded images.
 * @returns {Promise<string[]>} - Array of file paths of uploaded images.
 */
async function listImages() {
    return new Promise((resolve, reject) => {
        fs.readdir(imagesDirectory, (err, files) => {
            if (err) return reject(err);
            resolve(files.map(file => path.join(imagesDirectory, file)));
        });
    });
}

module.exports = {
    uploadImage,
    deleteImage,
    listImages
};