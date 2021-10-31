const mongoDB = require("mongodb"),
  MongoClient = mongoDB.MongoClient,
  url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  const currentDB = db.db("blog");
  //   createNewCollection(currentDB, "mongoDB");
  //   deleteCollection(currentDB, "mongoDB");
  //   getDocumentsByCollection(currentDB, "posts");
  //   obj = { name: "Ruti", age: 29, posts: [] };
  //   createNewDocument(obj, "Authors", currentDB);
});

// function createNewDocument(obj, collectionName, db) {
//   db.collection(collectionName).insertOne(obj, (err, res) => {
//     if (err) throw err;
//     console.log(res);
//   });
// }

// function createNewCollection(db, newColl) {
//   db.createCollection(newColl, (err, res) => {
//     if (err) throw err;
//     console.log(res);
//   });
// }

// function deleteCollection(db, collectionName) {
//   db.collection(collectionName).drop(function (err, res) {
//     if (err) throw err;
//     if (res) console.log("Collection deleted");
//   });
// }

// function getDocumentsByCollection(db, collectionName) {
//   db.collection(collectionName)
//     .find({})
//     .toArray(function (err, res) {
//       if (err) throw err;
//       console.log(res);
//     });
// }
