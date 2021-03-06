$(document).ready(function() {
    randomLogoEmoji();
    buildEmojiList();
});

/* Pick random emoji for logo */
function randomLogoEmoji() {
    let emojis = ['๐ก', '๐', '๐', '๐ฅธ', '๐', '๐ฉ', '๐ฝ', '๐', '๐ผ', '๐ช', 'โฝ๏ธ', '๐ธ', '๐งป', 'โค๏ธ', '๐ณ๏ธโ๐', '๐ชจ', '๐', '๐', 'โ๏ธ', '๐ค', '๐ฒ', '๐ฑ', '๐ฏ', '๐', '๐']
    var random = emojis[Math.floor(Math.random() * emojis.length)];
    $('#logo-emoji').html(random);
}

/* Build all emoji list */
function buildEmojiList() {
    let emojiJson = "emojis.json";
    let listBlock = '';
    $.getJSON(emojiJson, (data) => {
        for(let i = 0; i < data.length; i++) {
            let emojis = '';
            $.each(data[i].emojis, (i, item) => {
                emojis += `<div class="emoji">${item}</div>`;
            });
            listBlock += `<div class="block" id="${data[i].id}"><div class="title">${data[i].name}<span>${data[i].emojis.length} emojis</span></div>`;
            if(data[i].description) {
                listBlock += `<div class="description">${data[i].description}</div>`;
            }
            listBlock += `<div class="list">${emojis}</div></div>`;
        }
    }).done(() => {
        $('#emojis').html(listBlock);
    });
    
}