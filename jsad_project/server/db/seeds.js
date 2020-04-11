use jsad_project;
db.dropDatabase();

db.planets.insertMany([
    {name: "Earth", diameter: 12756, distance_from_sun: 149.6, number_of_moons: 1, day_length: 24, weight: 1},
    {name: "Jupiter", diameter: 142796, distance_from_sun: 778.3, number_of_moons: 671, day_length: 10, weight: 2.34},
    {name: "Mars", diameter: 6787, distance_from_sun: 227.9, number_of_moons: 2, day_length: 25, weight: 0.38},
    {name: "Mercury", diameter: 4878, distance_from_sun: 57.9, number_of_moons: 0, day_length: 1408, weight: 0.38},
    {name: "Neptune", diameter: 48600, distance_from_sun: 4497.1, number_of_moons: 13, day_length: 16, weight: 1.19},
    {name: "Pluto", diameter: 2274, distance_from_sun: 5913.0, number_of_moons: 4, day_length: 153, weight: 0.06},
    {name: "Saturn", diameter: 120660, distance_from_sun: 1427.0, number_of_moons: 62, day_length: 11, weight: 1.06},
    {name: "Uranus", diameter: 51118, distance_from_sun: 2871.0, number_of_moons: 27, day_length: 17, weight: 0.92},
    {name: "Venus", diameter: 12104, distance_from_sun: 108.2, number_of_moons: 0, day_length: 5832, weight: 0.91},
    {name: "Luna (Earth's Moon)",  diameter: 3474, distance_from_sun: 150, number_of_moons: 0, day_length: 708, weight: 0.17}
]);