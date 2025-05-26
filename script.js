$("button").on("click", function() {
    let btn = $(this); // Guarda el botón en una variable
    $("nav div").toggleClass("hidden flex");
    btn.toggleClass("text-green-500 text-red-500 border-green-500 border-red-500 hover:bg-green-500 hover:bg-red-500");
    $("#menud, #menur").toggleClass("hidden");
});