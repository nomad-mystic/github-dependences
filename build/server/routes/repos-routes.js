import express from 'express';
import { Octokit } from '@octokit/core';
import { request } from '@octokit/request';
export default class ReposRoutes {
    router;
    constructor() {
        this.router = express.Router();
        this.getAll();
        this.getOne();
    }
    getAll = () => {
        try {
            this.router.get('/get/all', async (req, res) => {
                const octokit = new Octokit({
                    auth: process.env.GITHUB_API_KEY,
                });
                const repos = await request('GET /users/{username}/repos', {
                    username: 'nomad-mystic',
                    headers: {
                        'X-GitHub-Api-Version': '2022-11-28'
                    }
                });
                res.send(repos);
            });
        }
        catch (err) {
            console.error(err);
        }
    };
    getOne = () => {
        try {
            this.router.get('/get/:id', (req, res) => {
                res.send('Get Repos by ID page');
            });
        }
        catch (err) {
            console.error(err);
        }
    };
}
