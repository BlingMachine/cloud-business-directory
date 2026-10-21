
// Example business data
const businesses = [
    {
        name: "Sunrise Coffee",
        category: "Food",
        location: "Phoenix, AZ",
        description: "A local coffee shop serving coffee, pastries, and breakfast."
    },
    {
        name: "Desert Tech Solutions",
        category: "Technology",
        location: "Tempe, AZ",
        description: "Provides computer repairs, IT support, and tech services."
    },
    {
        name: "Valley Clothing Co.",
        category: "Retail",
        location: "Mesa, AZ",
        description: "A small clothing store selling casual and everyday fashion."
    },
    {
        name: "Fresh Start Cleaning",
        category: "Services",
        location: "Chandler, AZ",
        description: "Residential and commercial cleaning services."
    },
    {
        name: "Downtown Pizza",
        category: "Food",
        location: "Phoenix, AZ",
        description: "A neighborhood pizza restaurant with fresh ingredients."
    },
    {
        name: "NextGen Electronics",
        category: "Technology",
        location: "Gilbert, AZ",
        description: "Electronics sales, computer accessories, and device support."
    },
    {
        name: "Desert Bloom Gifts",
        category: "Retail",
        location: "Scottsdale, AZ",
        description: "A gift shop selling handmade products and local artwork."
    },
    {
        name: "Valley Auto Detail",
        category: "Services",
        location: "Mesa, AZ",
        description: "Car detailing, interior cleaning, and exterior polishing."
    }
];

// Get HTML elements
const businessList = document.getElementById("businessList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");

// Display businesses on the page
function displayBusinesses(businessData) {

    // Clear existing cards
    businessList.innerHTML = "";

    // Show result count
    resultCount.textContent = businessData.length + " businesses found";

    // Show message if no businesses match
    noResults.hidden = businessData.length !== 0;

    // Create a card for each business
    businessData.forEach(business => {

        const card = document.createElement("div");
        card.className = "business-card";

        const name = document.createElement("h3");
        name.textContent = business.name;

        const category = document.createElement("span");
        category.className = "category";
        category.textContent = business.category;

        const location = document.createElement("p");
        location.textContent = "Location: " + business.location;

        const description = document.createElement("p");
        description.textContent = business.description;

        card.appendChild(name);
        card.appendChild(category);
        card.appendChild(location);
        card.appendChild(description);

        businessList.appendChild(card);
    });
}

// Filter businesses based on search and category
function filterBusinesses() {

    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;

    const filteredBusinesses = businesses.filter(business => {

        const matchesSearch =
            business.name.toLowerCase().includes(searchText) ||
            business.location.toLowerCase().includes(searchText) ||
            business.description.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "All" ||
            business.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    displayBusinesses(filteredBusinesses);
}

// Update results when user types or changes category
searchInput.addEventListener("input", filterBusinesses);
categoryFilter.addEventListener("change", filterBusinesses);

// Display all businesses when page loads
displayBusinesses(businesses);
