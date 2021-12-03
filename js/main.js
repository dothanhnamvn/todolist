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
                    <button class="remove" onclick="deleteTask(${task.id})">
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
                    <button class="remove" onclick="deleteTask(${task.id})">
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
            console.log(result.data);
            renderData(result.data);
        })
        .catch((error) => {
            console.log(error);
        });
};

fetchData();

/**
 * Delete Task
 */

const deleteTask = (id) => {
    listTaskService
        .deleteTaskApi(id)
        .then(() => {
            alert("delete success!");
            fetchData();
        })
        .catch((error) => {
            console.log(error);
        });
};
window.deleteTask = deleteTask;

/**
 * Add Task
 */
const addTask = (event) => {
    //Ngăn chặn việc load lại web
    event.preventDefault();

    //Lấy những value từ người dùng nhập vào
    const taskName = getEle("newTask").value;
    const taskStatus = false;

    if (taskName){}
    //tao doi tuong food tu lop doi tuong Food
    const task = new Task(
        "",
        taskName,
        taskStatus
    );

    listTaskService
        .addTaskApi(task)
        .then(() => {
            alert("Add success!");
            fetchData();
            document.getElementsByClassName("close")[0].click();
        })
        .catch((error) => {
            console.log(error);
        });
};
window.addTask = addTask;