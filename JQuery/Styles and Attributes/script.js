$('#one').text('Hello World!!!') 
//just chnages or puts the text

$('#one').html('Hello <b>World</b>')
//it is used to put the tags or elemenst inside the current elements.

$('#one').attr('height',200)
//changes the styrles on attributes
$('#one').attr('height',null)
$('#one').attr('height')
//undefined

$('#one').attr('height',2000)
$('#one').attr('height')
//2000

let o = $('#one')
o.attr('style','color:blue')
o.css('color')//"rgb(255, 0, 0)"

o.css('color','blue')
o.css('font-size','20pt')

o.css('font-size','20pt').attr('width',200)
o.css('font-size','20pt').attr('width',200).text('ytuyghnuyfghc')




