export default class ApiService {
    _apiBase = 'https://swapi.dev/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';
    
    getData = async (url) => {
        const response = await fetch(`${this._apiBase}${url}`);
        
        if (!response.ok) {
            throw new Error(`Couldn't fetch ${url} received ${response.status}`);
        }
        
        return response.json();
    };
    
    getAllPeople = async () => {
        const response = await this.getData(`/people/`);
        
        return response.results.map((person) => this._transformPerson(person));
    };
    
    getPerson = async (id) => {
        const person = await this.getData(`/people/${id}/`);
        
        return this._transformPerson(person);
    };
    
    getAllPlanets = async () => {
        const response = await this.getData(`/planets/`);
        
        return response.results.map(planet => this._transformPlanet(planet));
    };
    
    getPlanet = async (id) => {
        const planet = await this.getData(`/planets/${id}/`);
        
        return this._transformPlanet(planet);
    };
    
    getAllStarships = async () => {
        const response = await this.getData(`/starships/`);
        
        return response.results.map((starship) => this._transformStarship(starship));
    };
    
    getStarship = async (id) => {
        const starship = await this.getData(`/starships/${id}/`);
        
        return this._transformStarship(starship);
    };
    
    getPersonImage = (person) => {
        const { id } = person;
        
        return `${this._imageBase}/characters/${id}.jpg`
    };
    
    getStarshipImage = (starship) => {
        const { id } = starship;
        
        return `${this._imageBase}/starships/${id}.jpg`
    };
    
    getPlanetImage = (planet) => {
        const { id } = planet;
        
        return `${this._imageBase}/planets/${id}.jpg`
    };
    
    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        
        return item.url.match(idRegExp)[1];
    }
    
    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }
    
    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity,
        }
    }
    
    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
        }
    }
}