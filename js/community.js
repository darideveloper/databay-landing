



document.addEventListener('DOMContentLoaded', function () {
    let myFooter = document.getElementById('myFooter');
    myFooter.style.width = window.innerWidth + 'px';
});

window.addEventListener('resize', function () {
    let myFooter = document.getElementById('myFooter');
    myFooter.style.width = window.innerWidth + 'px';
});



// input
const community_input = document.getElementById("community_input");
const communtiy_btn_input = document.getElementById("communtiy-search-cta-btn");


communtiy_btn_input.addEventListener('click', () => {
    console.log("community!")
    if (community_input.value) {
        
//         const tfPopupValue = `aaWXeHFt?utm_source='${community_input.value}'`; 
      
    const tfPopupValue = `fBkZhmPl?utm_source='${community_input.value}'`;
        console.log(tfPopupValue);

        if (window.tf) {
            window.tf.createPopup(tfPopupValue).open();
        } else {
            var script = document.createElement('script');
            script.src = "//embed.typeform.com/next/embed.js";
            document.head.appendChild(script);

            window.tf.createPopup(tfPopupValue).open();
        };
    };
});

