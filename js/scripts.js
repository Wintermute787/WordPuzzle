$(function(){
  $('#formOne').submit(function(event){
    event.preventDefault();

    var sentence = $('#sentence1').val();
    var sentArr = sentence.split('');
    var vowels = ['a', 'e','i','o','u'];

    for(var i = 0; i < sentArr.length; i++){
      if(vowels.includes(sentArr[i])){
        sentArr[i] = '-';
      }
    }
    
    var puzzle = sentArr.join(" ");
    $(".puzzle").append("<li>" + puzzle + "</li>");
  })
})
