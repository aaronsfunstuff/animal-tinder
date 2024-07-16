// script.js

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
const likedAnimalsContainer = document.getElementById('liked-animals');
const mainLikedAnimalsContainer = document.getElementById('main-liked-animals');

function loadAnimalProfile(index) {
    const animal = animals[index];
    animalImage.src = animal.image;
    animalName.textContent = animal.name;
    animalDescription.textContent = animal.description;
}

document.getElementById('like').addEventListener('click', () => {
    swipeCard('right');
});

document.getElementById('dislike').addEventListener('click', () => {
    swipeCard('left');
});

function swipeCard(direction) {
    const card = document.querySelector('.card');
    card.style.transform = direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)';
    card.style.opacity = 0;
    setTimeout(() => {
        currentIndex++;
        if (currentIndex >= animals.length) {
            currentIndex = 0;
        }
        loadAnimalProfile(currentIndex);
        card.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
        card.style.transform = 'translateX(0)';
        card.style.opacity = 1;
    }, 400);

    // Handle liked animal
    if (direction === 'right') {
        const animal = animals[currentIndex];
        const likedAnimalElement = document.createElement('div');
        likedAnimalElement.classList.add('liked-animal');
        likedAnimalElement.innerHTML = `
            <img src="${animal.image}" alt="${animal.name}">
            <p>${animal.name}</p>
        `;
        likedAnimalsContainer.appendChild(likedAnimalElement);

        // Also add to the main page's liked animals section
        const mainLikedAnimalElement = likedAnimalElement.cloneNode(true);
        mainLikedAnimalsContainer.appendChild(mainLikedAnimalElement);
    }
}

// Load initial animal profile
loadAnimalProfile(currentIndex);
