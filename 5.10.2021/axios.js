const url = "https://jsonplaceholder.typicode.com/posts";

axios
  .get(url)
  .then(function (response) {
    console.log("successed");
    console.log(response);
    if (response.status === 200) {
      console.log(response.data);
    }
  })
  .catch(function (error) {
    console.log("error");
    console.log(error);
  });
