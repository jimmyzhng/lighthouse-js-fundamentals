let n = 100;

for (let n = 100; n <= 200; n++) {
  if (n % 3 === 0) {
    if (n % 4 === 0) {
      console.log(`LoopyLighthouse`);
    } else console.log(`Loopy`);
  } else if (n % 4 === 0) {
    console.log(`Lighthouse`);
  } else console.log(n);
}

