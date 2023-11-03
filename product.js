let sample_data = [
    {
        Brand:"Arrow",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/i/s/-original-imaghgchxvgkactc.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"Price:758",
        actualprice:"2299",
    },
    {
        Brand:"Arrow",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/a/p/c/40-arfkosh0024-arrow-original-imagszket7qcdbze.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"Price:1329",
        actualprice:"1799",
    },
    {
        Brand:"Arrow",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/r/x/d/50-anaesh1035-arrow-newyork-original-imagg48fqgxezpnk.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"Price:1286",
        actualprice:"2499",
    }, 
    {
        Brand:"Arrow",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/2/z/o/46-ares02011a-arrow-sport-original-imagknbgg4dcqvvv.jpeg?q=70",
        names:"Men Slim Self Shirt",
        price:"Price:1758",
        actualprice:"2099",
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/sock/g/y/y/free-5-sg-hlpt-01-swagr-original-imagpgrvkpfcazuf.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"Price:558",
        actualprice:"1399",
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/raincoat/d/r/t/xxl-az06-navy-royalblue-zeel-original-imagezz3zkwewtxf-bb.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"Price:558",
        actualprice:"1399",
        
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/9/z/c/-original-imagg9zwzngacvry.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"Price:5578",
        actualprice:"10399",
    },
    {
        Brand:"Arrow",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/s/4/f/-original-imagsfejwcyfa4yx.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"Price:2038",
        actualprice:"2899",
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/s/3/j/m-22mo116-2-moca-by-monte-carlo-original-imagkhz8pfsa7eyp.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"Price:558",
        actualprice:"1399",
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/n/m/e/m-int-ts-203-f-ns1-r-l-bk-integriti-original-imaggaqsqaqj5pyu.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"Price:558",
        actualprice:"1399",
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/z/0/k/l-all-rbcpon-sky-one-nb-nicky-boy-original-imagrdhcgyk7papf.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"Price:558",
        actualprice:"1399",
        
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/khdqnbk0/t-shirt/r/u/0/m-fc4173-fastcolors-original-imafxettxhthw8ye.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"Price:5578",
        actualprice:"10399",
        
        
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/7/v/i/m-st-boxhead-navyblue-smartees-original-imagmg9gcwn9bgww.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"Price:5578",
        actualprice:"10399",
        
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/t/e/0/l-st-theboys-black-smartees-original-imagnqszzzzyuzru.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"Price:5578",
        actualprice:"10399",
        
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/brief/1/s/e/xxl-xytrnk2pckn405-xyxx-original-imaggsgtsewhdvfg.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"Price:5578",
        actualprice:"10399",
        
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/boxer/h/r/j/m-533-2-ftx-original-imagpxjkqgyfjs83.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"Price:5578",
        actualprice:"10399",
        
    },
    

];

localStorage.setItem("productsdata",JSON.stringify(sample_data));
// console.log(sample_data);
let collection = JSON.parse(localStorage.getItem("productsdata")) || [];
let col=document.getElementById("collection")
Product();
function Product(){
    sample_data.map((element)=>{
        let box =document.createElement("div");
        let innerbox=document.createElement("div");
        innerbox.className="effect";
        let name=document.createElement("p");
        name.innerHTML=element.names
        let price1=document.createElement("span");
        price1.innerHTML=element.price;
        price1.className="gap1";
        let price2=document.createElement("span");
        price2.innerHTML=element.actualprice;
        price2.className="gap";
        let brand=document.createElement("p");
        brand.innerHTML=element.Brand;
        brand.className="color";
        innerbox.append(brand,name,price1, price2);
        let avatar=document.createElement("img");
        avatar.src=element.img_src;
        avatar.className="avatar";
        box.append(avatar, innerbox);
        document.getElementById("collection").append(box);
    })
    
}