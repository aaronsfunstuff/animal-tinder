const animals = [
    {
        name: "Buddy",
        description: "Friendly and energetic dog!",
        image: "https://www.pedigree.com/cdn-cgi/image/height=617,f=auto,quality=90/sites/g/files/fnmzdf3076/files/2023-05/what-breed-my-dog-540x300.png"
    },
    {
        name: "Whiskers",
        description: "Curious and playful cat.",
        image: "https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg"
    },
    {
        name: "Charlie",
        description: "Playful and loves fetch.",
        image: "https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg"
    }
];

let currentIndex = 0;

const animalImage = document.getElementById('animal-image');
const animalName = document.getElementById('animal-name');
const animalDescription = document.getElementById('animal-description');

function loadAnimalProfile(index) {
    const animal = animals[index];
    animalImage.src = animal.image;
    animalName.textContent = animal.name;
    animalDescription.textContent = animal.description;
}

document.getElementById('like').addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= animals.length) {
        currentIndex = 0;
    }
    loadAnimalProfile(currentIndex);
});

document.getElementById('dislike').addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= animals.length) {
        currentIndex = 0;
    }
    loadAnimalProfile(currentIndex);
});

loadAnimalProfile(currentIndex);
