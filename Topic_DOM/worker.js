self.onmessage = (message) => {
    console.log(message)
    const color_data = {
        "bg" : ['#DFFF00', '#FFBF00', '#FF7F50','#DE3163','#9FE2BF','#40E0D0'],
        "text" : ['#6495ED','#6495ED','#454545','#800080','#008080','#000080']
    }
    Idx = 0
    postMessage({
        "date_prn" : new Date(),
        "color_bg_btn" : color_data.bg[Idx % color_data.bg.length],
        "color_text_btn" : color_data.text[Idx % color_data.text.length]
    })
    setInterval(() => {
        Idx += 1
        postMessage({
            "date_prn" : new Date(),
            "color_bg_btn" : color_data.bg[Idx % color_data.bg.length],
            "color_text_btn" : color_data.text[Idx % color_data.text.length]
        })
    }, 1000)
}

