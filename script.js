const searchInput = document.querySelector(".form-control")
console.log(searchInput)
searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    console.log(value)
    const movies = document.querySelectorAll(".col-sm-6")
    movies.forEach(movie => {
        const title = movie.querySelector(".col-sm-6 p").textContent.toLowerCase()
        if (title.includes(value)) {
            movie.style.display = "block"
        } else {
            movie.style.display = "none"
        }
    })
})