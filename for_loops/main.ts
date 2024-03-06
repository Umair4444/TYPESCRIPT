function left_right() {
  for (let i = 0; i <= 100; i++) {
    let output = "";
    if (i % 3 == 0 && i % 5 == 0) output += "both";
    else if (i % 3 == 0) output += "left";
    else if (i % 5 == 0) output += "right";

    console.log(output || i);
  }
}

left_right();
