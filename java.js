const handleCategory = async () =>{
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();
    // const firstData=data.data
    const tabContainer=document.getElementById("tab-container")
// tabContainer.innerHTML = '';
    data.data.forEach((category) => {
        // console.log(category);
        const div= document.createElement("div");
        div.innerHTML =`
        <a  onclick="cardCategories('${category.category_id}')" class="tab">${category.category}</a>  
        `

tabContainer.appendChild(div);

    });
    console.log(data.data);

}

const cardCategories = async (cardCategories) =>{
    const response= await fetch(`https://openapi.programming-hero.com/api/videos/category/${cardCategories}`);
    const data= await response.json();
    // console.log(data.data)
    const noData=document.getElementById("no-content")
    console.log(data.data.lenght)
    if(data.data[0] == undefined){
      noData.classList.remove('hidden');
    }else{
      noData.classList.add('hidden');
    }
    const cardContainer= document.getElementById("card-container")
    cardContainer.innerHTML= '';

    data.data.forEach((data) =>{
        console.log(data)
        const div= document.createElement("div")
        div.innerHTML= `
        <div class="card  bg-base-100 shadow-xl">
        <div>
            <figure><img class="h-60 w-full overlay-text relative" src="${data.thumbnail}  alt="Shoes" /> <p class="absolute bg-red-100 p-1 rounded-lg">${data?.others?.posted_date}</p></figure>
            
            <div class="card-body">
              <h2 class="card-title">
                ${data.title}
                
              </h2>
              <div class="flex mt-4 mx-auto">
                <img class="rounded-full w-16 h-16" src="${data?.authors[0].profile_picture}"alt="">
                <div>
                <h2 class="card-title">
                ${data.title} </h2>
                <p>${data.authors[0].profile_name}<img src="${data.authors[0]?.verified? "./fi_10629607.svg" :""}" alt=""></p>
                
                <p>${data.others.views}</p>
                </div>
              </div>
            </div>
          </div>
        `;
        cardContainer.appendChild(div);

    })
  



}
handleCategory();
cardCategories(1000)
