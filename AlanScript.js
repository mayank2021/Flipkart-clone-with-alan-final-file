intent('(HellO|hii)', p => {
    p.play('(hello|hi there)');
});

intent('What can I do here with voice capabilities?', p => {
    p.play('you can do a lot of stuff. Try saying, scroll down or scroll up');
});

intent("I like number  $(itemNumber* (.*))", async p => {
    let itemNumber = p.itemNumber.value;
    p.play('Great! would like to add these in your cart?');
    let answer = await p.then(addInCart);
    if(answer === "yes please"){
         p.play({"command": "addItemInCart", itemNumber });
        p.play(`Sure, adding.`);
    }else if(answer === "no"){
         p.play(`Alright! Go on.`);
    }else{
        p.play("no match")
    }
});

let addInCart = context(() => {
       intent('$(A Yes please|no)', p => {
           return p.resolve(p.A.value);
    });
});


intent("(I want|show me) some $(requiredItem* (.*))", async p => {
    let requiredItem = p.requiredItem.value;
    p.play(`Sure! Showing ${requiredItem}`);
    p.play({"command":"showItem", requiredItem})
});


intent("Can you please add number $(itemNumber* (.*)) in my cart", async p => {
    let itemNumber = p.itemNumber.value;
    p.play(`Sure! adding`);
    p.play({"command":"addItemInCart", itemNumber})
});

intent("scroll down (| please).", p => {
     p.play('scrolling down');
    p.play({"command":"scrollDown"})
});

intent("scroll up (|please).", p => {
     p.play('scrolling up');
    p.play({"command":"scrollUp"})
});

intent("(|can you please) go to cart", p => {
     p.play('Sure! going');
    p.play({"command":"gotocart"})
});

intent("I want to buy all these things.", p => {
     p.play('Amazing! Order placed. Thank you for shopping with us.');
     p.play({"command":"buy"})
});

intent("go back", p => {
     p.play('going back');
     p.play({"command":"goback"})
});