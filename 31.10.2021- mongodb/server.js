const mongoDB = require("mongodb"),
  MongoClient = mongoDB.MongoClient,
  ObjectId = mongoDB.ObjectId,
  url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) console.log("Error in connecting the database");
  const currentDB = db.db("blog");
  //   createNewCollection(currentDB, "mongoDB");
  //   deleteCollection(currentDB, "mongoDB");
  //   getAllDocs(currentDB, "posts");
  //   let obj = { name: "Ruti", age: 29, posts: [] };
  //   createNewDoc(obj, "Authors", currentDB);

  // let objToUpdate = { name: "ruti" };
  // let objNewDetails = { $set: { Name: "Ruti" } };
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
  // { name: "Marcos.A", age: 99, posts: [] },
  // { name: "Kirkegor", age: 79, posts: [] },
  // { name: "Apllaton", age: 89, posts: [] },
  // ];
  // insertManyDocs(authorsArray, "Authors", currentDB);

  // let id = { _id: new ObjectId("617a910a659f3169ea7f91a4") };
  // deleteDocById(currentDB, "Authors", id);

  // let objNewDetails = { $set: { Age: 25 } };
  // updateById(currentDB, "Authors", objNewDetails, id);

  // let sortingType = { Age: 1 };
  // sortByAlphabet(currentDB, "Authors", sortingType);

  // id1 = new ObjectId("617a646d659f3169ea7f9195");
  // id2 = new ObjectId("617a62f4659f3169ea7f9193");
  // pushToArray(currentDB, id1, id2);
});

//! create document
// function createNewDoc(obj, collectionName, db) { //! creating function with 3 arguments
//   db.collection(collectionName).insertOne(obj, (err, document) => { //! inserting new object by collection name
// if (err) console.log("Error at create new document function");; //! handling the errors
//     console.log(document); //! prints the object which created
//   });
// }

//! create many documents
// function insertManyDocs(objArray, collectionName, db) {
//   db.collection(collectionName).insertMany(objArray, (err, documents) => {
// if (err) console.log("Error at creating many documents function");
//     console.log(documents);
//   });
// }

//! create collection
// function createNewCollection(db, newColl) { //! creating function for new collection
//   db.createCollection(newColl, (err, res) => { //! creating the new collection
//    if (err) console.log("Error at creating new collection function");
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
//     if (err) console.log("Error at updating by ID function");
//     console.log(res);
//   });
// }

//!delete document
// function deleteDocument(db, collectionName, objToDelete) {
//   db.collection(collectionName).deleteOne(objToDelete, (err, res) => {
//     if (err) console.log("Error at deleting document function");
//     console.log(res);
//   });
// }

//! delete document by ID
// function deleteDocById(db, collectionName, id) {
//   db.collection(collectionName).deleteOne(id, (err, res) => {
//     if (err) console.log("Error at deleting document by ID function");
//     console.log(res);
//   });
// }

//! delete collection
// function deleteCollection(db, collectionName) {
//   db.collection(collectionName).drop(function (err, res) {
//    if (err) console.log("Error at delete collection function");
//     console.log(res);
//   });
// }

//! sort array function
// function sortByAlphabet(db, collectionName, sortingType) {
//   db.collection(collectionName)
//     .find()
//     .sort(sortingType)
//     .toArray((err, res) => {
//       if (err) console.log("Error at sorting function");
//       console.log(res);
//     });
// }

//! push to array
// function pushToArray(db, authorId, postsId) {
//   db.collection("Authors").updateOne(
//     { _id: ObjectId(authorId) },
//     {
//       $push: { posts: postsId },
//     },
//     (err, res) => {
//       if (err) console.log("error at push function");
//       console.log(res);
//     }
//   );
// }

//! get all documents
// function getAllDocs(db, collectionName) {
//   db.collection(collectionName)
//     .find({})
//     .toArray( (err, res)=> {
//      if (err) console.log("Error at getting all the documents");
//       console.log(res);
//     });
// }
