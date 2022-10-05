
let editor = document.querySelector('.editor')
ace.edit(editor, {
    theme:'ace/theme/twilight',
    mode:'ace/mode/javascript',
    setUseWrapMode:true,
    selectionStlye: "text",
    setReadOnly:true
})
