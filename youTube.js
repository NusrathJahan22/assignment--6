async function youTube() {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    const allData = data.data;
    // console.log(allData)
    const tabcontainer = document.getElementById("tab-container");
    allData.category_id.forEach((category) => {
        const div = document.createElement("div");
        div.innerHTML = `
    <a class="tab">Tab 1</a>
    `;
        tabcontainer.appendChild(div);
    });

}
