import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";
import { api } from "./AxiosService.js";

class JobsService {
    async getJobs(){
    let res = await api.get('jobs')
    ProxyState.jobs = res.data.map(j => new Job(j))
    }

    async createJob(newJob){
        let res = await api.post('jobs', newJob)

        this.getJobs()

        let job = new Job(res.data)
        ProxyState.jobs = [...ProxyState.jobs, job]
    }

    async deleteJob(id){
        await api.delete('jobs/' + id)
        ProxyState.jobs = ProxyState.jobs.filter(job=> job.id != id)
    }

    async bid(id){
        let job = ProxyState.jobs.find(job=> job.id === id)
        job.rate += 1

        await api.put('jobs/' + id, { rate: job.rate })
        ProxyState.jobs = ProxyState.jobs
        window.alert('thank you for applying')
    }
}








export const jobsService = new JobsService();