import TaskService from "./services/task-service.js";
import Task from "./models/task.js";

const listTaskService = new TaskService();

const getEle = (id) => document.getElementById(id);

const renderData = (arr) => {
    //const html = arr?.reduce((contentHTML, task) => {
    let htmlCompleted = "";
    let htmlTodo = "";

    arr.forEach((task) => {
        if (task.taskStatus === true) {
            htmlCompleted += `
                <li>
                    <span>${task.taskName}</span>
                    <div class="buttons">
                    <button class="remove">
                        <i class="fa fa-trash-alt"></i>
                    </button>
                    <button class="complete">
                        <i class="far fa-check-circle"></i>
                        <i class="fas fa-check-circle"></i>
                    </button>
                    </div>
                </li>
            `;
        } else {
            htmlTodo += `
                <li>
                    <span>${task.taskName}</span>
                    <div class="buttons">
                    <button class="remove">
                        <i class="fa fa-trash-alt"></i>
                    </button>
                    <button class="complete">
                        <i class="far fa-check-circle"></i>
                        <i class="fas fa-check-circle"></i>
                    </button>
                    </div>
                </li>
            `;
        }
    });

    const html = `
        <ul class="todo" id="todo">${htmlTodo}</ul>
        <ul class="todo" id="completed">${htmlCompleted}</ul>
    `;
    
    getEle("listTask").innerHTML = html;
};

const fetchData = () => {
    listTaskService
        .getListTaskApi()
        .then((result) => {
            renderData(result.data);
        })
        .catch((error) => {
            console.log(error);
        });
};

fetchData();