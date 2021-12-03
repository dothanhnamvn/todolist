export default class taskService {
    url = "https://6183cafe91d76c00172d1b67.mockapi.io/api/Task";

    getListTaskApi() {
        return axios({
            url : this.url,
            method: "GET",
        });
    }

    deleteTaskApi(id) {
        console.log(`${this.url}/${id}`);
        return axios({
            url: `${this.url}/${id}`,
            method: "DELETE",
        });
    }

    addTaskApi(task) {
        return axios({
            url : this.url,
            method: "POST",
            data: task,
        });
    }

    getTaskById(id) {
        return axios({
            url: `${this.url}/${id}`,
            method: "GET",
        });
    }

    updateTaskApi(task) {
        return axios({
            url: `${this.url}/${task.id}`,
            method: "PUT",
            data: task,
        });
    }
}