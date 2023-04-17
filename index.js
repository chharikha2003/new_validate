const dropdowns=document.querySelectorAll('.dropdown');
let myInput=document.getElementById('myInput');
let selectText=document.getElementById('selectText');
dropdowns.forEach(dropdown=> {

    const select=dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu=dropdown.querySelector('.menu');
    const options=dropdown.querySelectorAll('.menu li');
    const selected=dropdown.querySelector('.selected');

select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');

    caret.classList.toggle('caret-rotate');

    menu.classList.toggle('menu-open');
});


options.forEach(option => {
    option.addEventListener('click', ()=>{
        selected.innerText=option.innerText;

        select.classList.remove('select-clicked');

        caret.classList.remove('caret-rotate');

        menu.classList.remove('menu-open');

        options.forEach(option=>{
            option.classList.remove('active');
        });

        option.classList.add('active');
    });
    // for(option of options){
    //     option.onclick=function(){
    //         selectText.innerHTML=this.innerHTML;
    //         myInput.placeholder="  Search by " + selectText.innerHTML;
    //     }
    // }
});

});

const searchFun=()=>{
    
    var category=selectText.innerText;
    let filter=document.getElementById('myInput').value.toUpperCase();
    // const options=dropdowns.querySelectorAll('.menu li');
    let myTable=document.getElementById('myTable');
    let tr=myTable.getElementsByTagName('tr');

    for(var i=0;i<tr.length;i++){
       if(category=="ISSN"){
        var td=tr[i].getElementsByTagName('td')[0];
       }
       else if(category=='Publisher'){
        var td=tr[i].getElementsByTagName('td')[3];
       }
       else if(category=='Journal Title'){
        var td=tr[i].getElementsByTagName('td')[2];
       }
        
        if(td){
            let textvalue=td.textContent || td.innerHTML;

            if(textvalue.toUpperCase().indexOf(filter)>-1){
                tr[i].style.display="";
            }else{
                tr[i].style.display="none";
            }
        }
    }
    
}
