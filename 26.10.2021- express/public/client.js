document.getElementById("btn").addEventListener("click", getTasks);
document.getElementById("idForm").addEventListener("submit", addTask);
document.getElementById("btnSearchById").addEventListener("click", searchById);
document.getElementById("btnDelete").addEventListener("click", deleteById);

function getTasks(e) {
  e.preventDefault();
  axios
    .get("/tasks")
    .then(function (response) {
      if (response.status == 200) {
        const tasks = response.data;
        console.log(tasks);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function addTask(e) {
  e.preventDefault();
  const name = document.getElementById("taskNameId").value;
  axios
    .post("/tasks", {
      name,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function searchById(e) {
  e.preventDefault();
  const search = document.getElementById("searchInput").value;
  axios
    .get(`/tasks/${search}`)
    .then(function (response) {
      if (response.status == 200) {
        console.log(response.data);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function deleteById(e) {
  e.preventDefault();
  const id = document.getElementById("deleteById").value;
  axios
    .delete(`/tasks/${id}`)
    .then(function (response) {
      if (response.status == 200) {
        const tasks = response.data;
        console.log(tasks);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
