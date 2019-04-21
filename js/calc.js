

$(".sum").click(event => {
    const inp = $(".result")
    inp.text(eval(inp.text()))
})

$(".reset").click(event => {
    const inp = $(".result")
    inp.text("")
})

$(".back").click(event => {
    const inp = $(".result")
    inp.text(inp.text().slice(0, -1))
})

$("button.number").click(event => {
    const inp = $(".result")
    console.log(event.target.innerText)
    inp.text(inp.text() + event.target.innerText)
})