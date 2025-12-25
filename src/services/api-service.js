export default class ApiService {
    _apiBase = 'https://swapi.dev/api';
    
    async getData(url) {
        const response = await fetch(`${this._apiBase}${url}`);
        
        if (!response.ok) {
            throw new Error(`Couldn't fetch ${url} received ${response.status}`);
        }
        
        return response.json();
    }
    
    async getAllPeople() {
        const response = await this.getData(`/people/`);
        
        return response.results;
    }
    
    getPerson(id) {
        return this.getData(`/people/${id}/`);
    }
    
    async getAllPlanets() {
        const response = await this.getData(`/planets/`);
        
        return response.results;
    }
    
    getPlanet(id) {
        return this.getData(`/planets/${id}/`);
    }
    
    async getAllStarships() {
        const response = await this.getData(`/starships/`);
        
        return response.results;
    }
    
    getStarship(id) {
        return this.getData(`/starships/${id}/`);
    }
}