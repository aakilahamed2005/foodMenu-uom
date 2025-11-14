

document.addEventListener("DOMContentLoaded", ()=>{
    const isSelect = {veg: false, non_veg: false, lunch_special: false, dinner_special: false, show_all: true};

    document.getElementById("filter-btn").addEventListener("click", () => {
        const checkedItems = document.querySelectorAll('input[name="filter_selection"]:checked');
        const selection = Array.from(checkedItems).map(item => item.value);

        
    });
});

