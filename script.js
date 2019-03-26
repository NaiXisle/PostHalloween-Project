


var Costumes = ["https://i.pinimg.com/originals/17/d9/c1/17d9c1f5a3ee240b444347dfeaff1d47.png", "https://orig00.deviantart.net/fdcf/f/2018/066/e/7/spiderman_avengers_infinity_war_png_by_gasa979-dc58yu4.png",  "https://i.pinimg.com/originals/be/04/84/be0484ada9115e0f0d9023734aac7df6.png" ];

$("select.deals").change(function(){
    var costumes = $(this).children("option:selected").val();
    alert("The best deals are - " + costumes + "!");
    //conditional statement
    });
    
$("#btn1").            click(function(){
    var number = Math.floor(Math.random()*4);
    $(".img1").attr("src", Costumes[number]);
});

var Candy = [ "https://cdn.shopify.com/s/files/1/0972/7116/products/Swedish_Fish_Theater_Box_3.1_oz.png?v=1522702001", "https://cdn.shopify.com/s/files/1/0972/7116/products/starburst-theater-box.png?v=1459345159" , "https://i5.walmartimages.com/asr/523914dd-c26f-4496-a4c0-00caebf7adb4_2.f11ce17b350378048e67a30b000d9c4c.png?odnHeight=560&odnWidth=560&odnBg=FFFFFF" ];

$("#btn2").            click(function(){
    var number2 = Math.floor(Math.random()*4);
    $(".img2").attr("src", Candy[number2]);
});
