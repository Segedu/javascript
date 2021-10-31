const mongoDB = require("mongodb"),
  MongoClient = mongoDB.MongoClient,
  url = "mongodb://localhost:27017/",
  mongodb = require("mongodb");

MongoClient.connect(url, (err, db) => {
  if (err) console.log("Error in connecting the database");
  const currentDB = db.db("blog");
  //   createNewCollection(currentDB, "mongoDB");
  //   deleteCollection(currentDB, "mongoDB");
  //   getAllDocs(currentDB, "posts");
  // let obj = { name: "Ruti", age: 29, posts: [] };
  //   createNewDoc(obj, "Authors", currentDB);

  // let objToUpdate = { name: "ruti" };
  // let objNewDetails = { $set: { age: 25 } };
  // updateDocument(currentDB, "Authors", objToUpdate, objNewDetails);

  // let objToDelete = { name: "Apllaton" };
  // deleteDocument(currentDB, "Authors", objToDelete);

  // let objArray = [
  //   {
  //     Title: "new post 31.10.2021",
  //     Description: "lorem ipsum",
  //     Author: "Ruti",
  //   },
  //   {
  //     Title: "new post 29.10.2021",
  //     Description: "lorem ipsum",
  //     Author: "Maayan",
  //   },
  //   { Title: "new post 1.11.2021", Description: "lorem ipsum", Author: "Anat" },
  // ];

  // let authorsArray = [
  // { name: "marcos.A", age: 99, posts: [] },
  // { name: "kirkegor", age: 79, posts: [] },
  // { name: "Apllaton", age: 89, posts: [] },
  // ];
  // insertManyDocs(authorsArray, "Authors", currentDB);

  // let id = { _id: new mongodb.ObjectId("617a910a659f3169ea7f91a4") };
  // deleteDocById(currentDB, "Authors", id);

  // let objNewDetails = { $set: { Age: 25 } };
  // updateById(currentDB, "Authors", objNewDetails, id);
});

//! create document
// function createNewDoc(obj, collectionName, db) { //! creating function with 3 arguments
//   db.collection(collectionName).insertOne(obj, (err, document) => { //! inserting new object by collection name
//     if (err) throw err; //! handling the errors
//     console.log(document); //! prints the object which created
//   });
// }

//! create many documents
// function insertManyDocs(objArray, collectionName, db) {
//   db.collection(collectionName).insertMany(objArray, (err, documents) => {
//     if (err) console.log("Error at creating multi documents function");
//     console.log(documents);
//   });
// }

//! create collection
// function createNewCollection(db, newColl) { //! creating function for new collection
//   db.createCollection(newColl, (err, res) => { //! creating the new collection
//    if (err) console.log("Error at creating new collection");
//     console.log(res);
//   });
// }

//! update document
// function updateDocument(db, collectionName, objToUpdate, objNewDetails) {
//   db.collection(collectionName).updateOne(
//     objToUpdate,
//     objNewDetails,
//     (err, res) => {
//       if (err)
//         console.log(`Error at updating the document at ${collectionName}`);
//       console.log(res);
//     }
//   );
// }

//! update document by ID
// function updateById(db, collectionName, objNewDetails, id) {
//   db.collection(collectionName).updateOne(id, objNewDetails, (err, res) => {
//     if (err) console.log("Error at function updating by ID");
//     console.log(res);
//   });
// }

//!delete document
// function deleteDocument(db, collectionName, objToDelete) {
//   db.collection(collectionName).deleteOne(objToDelete, (err, res) => {
//     if (err) console.log("error at deleting function");
//     console.log(res);
//   });
// }

//! delete document by ID
// function deleteDocById(db, collectionName, id) {
//   db.collection(collectionName).deleteOne(id, (err, res) => {
//     if (err) console.log("error at deleting specific obj");
//     console.log(res);
//   });
// }

//! delete collection
// function deleteCollection(db, collectionName) {
//   db.collection(collectionName).drop(function (err, res) {
//     if (err) throw err;
//     if (res) console.log("Collection deleted");
//   });
// }

//! get all documents
// function getAllDocs(db, collectionName) {
//   db.collection(collectionName)
//     .find({})
//     .toArray( (err, res)=> {
//       if (err) throw err;
//       console.log(res);
//     });
// }
