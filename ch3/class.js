{
    class Animal {
        constructor(name) {
            this.name = name;
        }
        move(distanceInMeters = 0) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    const animal = new Animal('animal');
    animal.name = 'person';
}
