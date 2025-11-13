

document.addEventListener("DOMContentLoaded", ()=>{
    const isSelect = {veg: false, non_veg: false, lunch_special: false, dinner_special: false, show_all: true};

    document.getElementById("filter-btn").addEventListener("click", () => {
        const checkedItems = document.querySelectorAll('input[name="filter_selection"]:checked');
        const selection = Array.from(checkedItems).map(item => item.value);


        if(!selection.length == 0){
            for(let i=0; i<selection.length; i++){
                if(selection[i] == "veg"){
                    isSelect["veg"] = true;
                    document.querySelector(".non_veg_item").style.display = none;
                }else if(selection[i] == "non_veg"){
                    isSelect["non_veg"] = true;
                }else if(selection[i] == "lunch_special"){
                    isSelect["non_veg"] = true;
                }else if(selection[i] == "dinner_special"){
                    isSelect["non_veg"] = true;
                }else{
                    isSelect["show_all"] = true;
                }
            }
        }
    });
});

