{
    class Animal {
        public name: string;

        constructor(name: string) {
            this.name = name;
        }
        move(distanceInMeters = 0) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    const animal = new Animal('animal');
    animal.name = 'person';
    console.log(animal.name);
}
