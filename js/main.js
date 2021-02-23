const $$s = document.querySelectorAll.bind(document);
const $s = document.querySelector.bind(document);

const tabs = $$s(".tab-item");
const tabsContent = $$s(".tabs-content--pane");
const tabsList = $$s(".tabs-list--pane");
const tabsMenu = $$s(".tabs-content-menu--item");
const tabsListMenu = $$s(".tabs-list-menu--item");
const tabsBody = $$s(".tabs-content-body--item");

const searchsItem = $$s(".search--item");
const searchsDropdown = $$s(".search--dropdown");

searchsItem.forEach((searchItem, index) => {
    searchItem.onclick = function(){
        const searchDropdown = searchsDropdown[index];

        // $s(".search--dropdown.active").classList.remove("active")
        
        
        // $s(".search--item.active").classList.remove("active")
        
        
        // this.classList.add("active");
        searchDropdown.classList.toggle("active");
        
    }
});

// SELECT TOOL




// SELECT 
tabs.forEach((tab, index) => {

    
    tab.addEventListener("click", function(){
        const tabContent = tabsContent[index];
        const tabList = tabsList[index];

        $s(".tab-item.active").classList.remove("active");
        $s(".tabs-content--pane.active").classList.remove("active");
        $s(".tabs-list--pane.active").classList.remove("active");

        this.classList.add("active");
        tabContent.classList.add("active");
        tabList.classList.add("active");
    })
});

tabsMenu.forEach((tabMenu, index) => {

    tabMenu.addEventListener("click", function(){
        const tabMenu = tabsMenu[index];
        const tabListMenu = tabsListMenu[index];
        
        $s(".tabs-content-menu--item.active").classList.remove("active");
        $s(".tabs-list-menu--item.active").classList.remove("active");


        this.classList.add("active");
        tabListMenu.classList.add("active");
    })

});


tabsBody.forEach((tabBody, index) => {

    tabBody.addEventListener("click", function(){
        
        tabBody.classList.toggle("active");
    })

});


$(window).load(function() {
    $('body').removeClass('preloading');
    $('#preload').delay(500).fadeOut('fast');
});









