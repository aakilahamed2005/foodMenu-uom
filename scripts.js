document.addEventListener("DOMContentLoaded", ()=>{

    document.getElementById('filter_form').addEventListener('submit',(event)=>{
        event.preventDefault();
        
        const selected_value = document.getElementById('form_selection').value;
        
        if(selected_value == 'all'){
            console.log("All");
            const div_selectors = ["main-dishes-container","beverages-container","staters-container"];
            for(let i=0; i< div_selectors.length; i++){
                document.querySelector(`.${div_selectors[i]}`).style.display = "";
            }
            document.querySelectorAll(".non_veg_item").forEach(item => {
                item.style.display = "";
            });
            document.querySelectorAll(".veg_item").forEach(item => {
                item.style.display = "";
            });


        }else if(selected_value == 'veg'){
            console.log("Veg");
            document.querySelectorAll(".non_veg_item").forEach(item => {
                item.style.display = "none";
            });

            document.querySelectorAll(".veg_item").forEach(item => {
                item.style.display = "";
            });

            const div_selectors = ["main-dishes-container","beverages-container","staters-container"];
            for(let i=0; i< div_selectors.length; i++){
                document.querySelector(`.${div_selectors[i]}`).style.display = "";
            }

        }else if(selected_value == "non_veg"){
            console.log("Non Veg");
            document.querySelectorAll(".veg_item").forEach(item => {
                item.style.display = "none";
            });
            document.querySelectorAll(".non_veg_item").forEach(item => {
                item.style.display = "";
            });

            const div_selectors = ["main-dishes-container","beverages-container","staters-container"];
            for(let i=0; i< div_selectors.length; i++){
                document.querySelector(`.${div_selectors[i]}`).style.display = "";
            }
        }else if(selected_value == "beverage"){
            console.log("Beverages");
            const div_selectors = ["main-dishes-container","staters-container"];
            for(let i=0; i< div_selectors.length; i++){
                document.querySelector(`.${div_selectors[i]}`).style.display = "none";
            }

        }else{
            console.log("Invalid");
        }

    });


});

